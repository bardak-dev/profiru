import {Query,Resolver} from 'type-graphql';
import {News}           from './news.model';

@Resolver(News)
export class NewsResolver{
  @Query(() => [News],{nullable:true,complexity:2})
  async news(){
    return News.find();
  }
}
