import React from 'react';
import './App.css';
import './public/css/style.css'

//start >>> admin-components
import AdminPage from './components/admin/AdminPage'
//end >>> admin-components
//start >>> client-components
import ClientPage from './components/client/ClientPage'
// import Header from './components/client/Header';
// import Footer from './components/client/Footer';
// import Home from './components/client/Home'
import About from './components/client/About'
//end >>> client-components

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/admin' render={() => <AdminPage />} />
          <Route path='/' render={() => <ClientPage />} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
