import 'reflect-metadata';
import {ApolloServer}                                         from 'apollo-server-express';
import Express                                                from 'express';
import cors                                                   from 'cors';
import queryComplexity,{fieldConfigEstimator,simpleEstimator} from 'graphql-query-complexity';
import {createSchema}                                         from './utils/createSchema';
import {createTypeormConn}                                    from './utils/createTypeormConn';

const server=async() => {
  await createTypeormConn();
  const schema=await createSchema();
  const apolloServer=new ApolloServer({
    schema,
    context:({req,res}: any) => ({req,res}),
    validationRules:[
      queryComplexity({
        // The maximum allowed query complexity, queries above this threshold will be rejected
        maximumComplexity:28,
        // The query variables. This is needed because the variables are not available
        // in the visitor of the graphql-js library
        variables:{},
        // Optional callback function to retrieve the determined query complexity
        // Will be invoked weather the query is rejected or not
        // This can be used for logging or to implement rate limiting
        onComplete:(complexity: number) => {
          console.log('Query Complexity:',complexity);
        },
        estimators:[
          // Using fieldConfigEstimator is mandatory to make it work with type-graphql
          fieldConfigEstimator(),
          // This will assign each field a complexity of 1 if no other estimator
          // returned a value. We can define the default value for field not explicitly annotated
          simpleEstimator({
            defaultComplexity:1
          })
        ]
      }) as any
    ]
  });
  const app=Express();
  app.use(
    cors({
      credentials:true,
      origin:`${process.env.FRONT_URL||'http://localhost:3000'}`
    })
  );
  apolloServer.applyMiddleware({app,cors:false});
  app.listen(process.env.APP_PORT||4000,() => {
    console.log(`🚀 Server ready at http://${process.env.APP_HOST||'localhost'}:${process.env.APP_PORT||'4000'}/graphql`);
  });
};
export default server;
