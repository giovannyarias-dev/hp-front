import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Layout } from 'antd';

import { Login } from '../pages/Login';
import { PlanningPoker } from '../pages/PlanningPoker';
import { Admin } from '../pages/Admin';
import { Header } from '../components/Header';
import { PrivateRoute } from './PrivateRoute';
import { eRoutes } from '../enums/eRoutes';
import { useSelector } from 'react-redux';
import { iState } from '../interfaces/iState';

const { Content } = Layout;

export const AppRouter = () => {

  const { auth } = useSelector( ( state: iState ) => state );

  return (
    <Router>
      <div>
        { auth.logged && <Header /> }
        <Layout style={{ height: '100vh' }}>
          <Content className="site-layout-container">
            <Switch>
              <PrivateRoute path={ eRoutes.PLANNING } component={ PlanningPoker } isAuthenticated={ auth.logged } />
              <PrivateRoute path={ eRoutes.ADMIN } component={ Admin } isAuthenticated={ auth.logged } />
              <Route exact path={ eRoutes.LOGIN } component={ Login } />
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
};
