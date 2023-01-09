import React from "react";
import { Container } from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";

import Navbar from "./components/Navbar/navbar";
import Test from "./components/Auth/test";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Test />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
export default App;
