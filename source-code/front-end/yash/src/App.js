import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//already implement bootstrap in index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './styles/style.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import NoMatch from './components/NoMatch'
import Product from './components/Product'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="client-body container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/products" exact component={Products}/> */}
            <Route exact path="/products/:type" component={Products}/>
            <Route path="/products/:type/:id" component={Product}/>
            <Route path="*" exact component={NoMatch} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
