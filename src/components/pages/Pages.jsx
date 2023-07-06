import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../common/Header";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/">
            <About />
          </Route>
            */}
        </Switch>
      </Router>
    </>
  );
};
