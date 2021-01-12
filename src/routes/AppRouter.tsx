import React, { useContext } from 'react';
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
import { routesTypes } from '../types/routesTypes';
import { AuthContext } from '../context/AuthContext';
import { PrivateRoute } from './PrivateRoute';

const { Content } = Layout;

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        { user._logged && <Header /> }
        <Layout style={{ height: '100vh' }}>
          <Content className="site-layout-container">
            <Switch>
              <PrivateRoute path={ routesTypes.planning } component={ PlanningPoker } isAuthenticated={ user._logged } />
              <PrivateRoute path={ routesTypes.admin } component={ Admin } isAuthenticated={ user._logged } />
              <Route exact path={ routesTypes.login } component={ Login } />
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
};
