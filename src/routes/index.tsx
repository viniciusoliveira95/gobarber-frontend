import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashbord from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashbord} isPrivate />
  </Switch>
);

export default Routes;
