import React from 'react';
import './App.css';
import './public/css/style.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
