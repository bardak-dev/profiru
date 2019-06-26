import {ApolloClient}          from 'apollo-client';
import {HttpLink}              from 'apollo-link-http';
import {ApolloLink,Observable} from 'apollo-link';
import {InMemoryCache}         from 'apollo-cache-inmemory';
import {cookieStore}           from '../utils/cookies';
import {Operation}             from 'apollo-link/lib/types';
import {SubscriptionClient}    from 'subscriptions-transport-ws';
import {WebSocketLink}         from 'apollo-link-ws';

export const token=cookieStore.get('Shop-Stigma-Admin-Access-Token');
const request=async(operation: Operation) => {
  operation.setContext({
    headers:{}
  });
};
const requestLink=new ApolloLink((operation,forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation).then(op => request(op)).then(() => {
      handle=forward!(operation).subscribe({
        next:observer.next.bind(observer),
        error:observer.error.bind(observer),
        complete:observer.complete.bind(observer)
      });
    }).catch(observer.error.bind(observer));
    return () => {
      if(handle){
        handle.unsubscribe();
      }
    };
  })
);
export const getApolloClient=(endpoint: string) => new ApolloClient({
  link:(() => {
    const linkFrom=ApolloLink.from([
      requestLink,
      new HttpLink({
        uri:`${endpoint}`,
        credentials:'include'
      })
    ]);
    const endpointWS=false;//endpoint.replace(/^http:\/\//g,'ws://').replace(/^http:\/\//g,'wss://');
    return endpointWS? ApolloLink.split(({query:{definitions}}) =>
        definitions.some(({kind,operation}: any) => kind==='OperationDefinition'&&operation==='subscription'),
      new WebSocketLink(new SubscriptionClient(endpointWS,{reconnect:true})),linkFrom)
      : linkFrom;
  })(),
  cache:new InMemoryCache()
});
