import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Todo } from "./pages/";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo/:id" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
