import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainListPage from "./pages/MainListPage";
import AddItemPage from "./pages/AddItemPage";

import {
  App,
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
} from "tailwind-mobile/react";

export default function MyApp() {
  return (
    <Router basename="/select-buy-repeat">
      <App theme="ios">
        <Switch>
          <Route path="/add">
            <AddItemPage />
          </Route>
          <Route path="/">
            <MainListPage />
          </Route>
        </Switch>
      </App>
    </Router>
  );
}
