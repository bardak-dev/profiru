import React          from 'react';
import {Route,Switch} from 'react-router-dom';
import Loader         from '../components/Loader';
import Loadable       from 'react-loadable';
import '../styled/styles';

const Home=Loadable({
  loader:() => import('../pages/home'),
  loading:Loader,
  delay:200
});
const App=() => {
  return (
    <Switch>
      <Route exact={false} path="/" component={Home}/>
    </Switch>
  );
};
export default App;
