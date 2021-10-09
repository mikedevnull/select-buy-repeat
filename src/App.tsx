import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Navigator } from "react-onsenui";

interface PageRoute {
  component: any;
  props?: any;
}

function renderPage(route: PageRoute, navigator: Navigator) {
  const props = route.props || {};
  props.navigator = navigator;
  return React.createElement(route.component, props);
}

function App() {
  return (
    <Navigator initialRoute={{ component: MainPage }} renderPage={renderPage} />
  );
}

export default App;
