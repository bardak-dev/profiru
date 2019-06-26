import 'reflect-metadata';
import startServer from './server';

async function bootstrap(){
  await startServer();
}
bootstrap().catch((error: Error) => {
  console.error(error);
  if(error.stack){
    console.error(error.stack.split('\n'));
  }
  process.exit(1);
});
