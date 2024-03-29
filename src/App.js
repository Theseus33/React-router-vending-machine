import React, { Component } from 'react';
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/soda" render={() => <Soda />} />
      </div>
    );
  }
}

export default App;
