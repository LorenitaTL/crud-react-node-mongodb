import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};
