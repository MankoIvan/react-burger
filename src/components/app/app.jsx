import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Layout from '../layout/layout';
import MainContent from '../main-content/main-content';
import { Constructor, ForgotPassword, Login, Profile, Register, ResetPassword } from '../../pages';

function App() {
  return (
    <Layout>
      <AppHeader />
      <MainContent>
        <Switch>
          <Route path='/' exact>
            <Constructor />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/forgot-password' exact>
            <ForgotPassword />
          </Route>
          <Route path='/reset-password' exact>
            <ResetPassword />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
        </Switch>
      </MainContent>
    </Layout>
  );
}

export default App;
