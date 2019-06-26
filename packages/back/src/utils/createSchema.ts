import {buildSchema} from 'type-graphql';

export const createSchema=() => buildSchema({
  resolvers:[`${__dirname}/../modules/**/!(*.test)resolver.?(ts|js)`]
});
