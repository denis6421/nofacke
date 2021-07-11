import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./constans";
import Admin from "./screens/Admin";
import Home from "./screens/Home";
import Product from "./screens/Product";
import "./style/index.scss";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/" component={Home} />
        <Route exact path={routes.product} component={Product} />
      </Switch>
    </div>
  );
}

export default App;
