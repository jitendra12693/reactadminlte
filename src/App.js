import React from 'react';
import './App.css';
import Footer from './shared/Footer';
import Header from './shared/Header';
import SideBar from './shared/SideBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './modules/component/dasboard';
import ThreePLCompanyInformation from './modules/login/threepl-company-info';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <SideBar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/3plCompanyInfo" component={ThreePLCompanyInformation}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
