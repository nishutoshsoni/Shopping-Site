import React, { Component } from 'react';
import {Router,Route,browserHistory,IndexRoute } from "react-router";
import Root from "./Components/Root"
import Details from "./Containers/Details"
import ElementList from './Containers/ElementList';
import AddToCart from "./Components/AddToCart"

class App extends Component {
  render() {
    return (
      <Router history ={browserHistory}>
        <Route path={"/"} component = {Root}>
          <IndexRoute component ={ElementList}/>
            <Route path={"details/:id"} component = {Details}>
            </Route>
            <Route path={"/cart"} component = {AddToCart}>
            </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
