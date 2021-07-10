import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/Navbar";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Dashbaord from "./components/admin/Dashbaord";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route
            path="/products"
            render={(props) => <Products name="salman" {...props} />}
          />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashbaord} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
