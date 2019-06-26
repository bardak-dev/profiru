import {News}              from './modules/news/news.model';
import Faker               from 'faker';
import {createTypeormConn} from './utils/createTypeormConn';

if(process.env.NODE_ENV!=='development'){
  throw 'Seeding only available in development environment';
}
const images=[
  'https://images.unsplash.com/photo-1485217988980-11786ced9454',
  'https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1',
  'https://images.unsplash.com/photo-1550831107-1553da8c8464',
  'https://images.unsplash.com/photo-1483385573908-0a2108937c4a',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
  'https://images.unsplash.com/photo-1526367790999-0150786686a2',
  'https://images.unsplash.com/photo-1489089905289-5c91ae6e2544',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1'
];
const NUM_NEWS=images.length;
export const seedDatabase=async() => {
  await createTypeormConn();
  await News.delete({});
  for(let index=0; index<NUM_NEWS; index++){
    const title=`${Faker.lorem.sentence(4)}`;
    const description=`${Faker.lorem.paragraph(1)}`;
    const image=images[index];
    try{
      const user=await News.create({
        title,
        description,
        image
      }).save();
      console.log('user save id',user);
    }catch(error){
      console.error(title,error);
    }
  }
};
seedDatabase().then(() => {
  return process.exit(0);
}).catch(err => {
  console.log(err);
  return process.exit(1);
});
