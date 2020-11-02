import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home"
import Info from "../routes/Info"
import Selftest from "../routes/Selftest"
import Prevention from "../routes/Prevention"
import Source from "../routes/Source"

function App() {
  return(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/selftest" component={Selftest} />
      <Route path="/prevention" component={Prevention} />
      <Route path="/source" component={Source} />
    </Switch>
  </Router>
  );
}

export default App;
