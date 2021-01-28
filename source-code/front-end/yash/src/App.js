import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//already implement bootstrap in index.js
import './App.css'
import './styles/style.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
        </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
