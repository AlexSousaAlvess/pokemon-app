import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Components/Header/Index";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Switch>
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
