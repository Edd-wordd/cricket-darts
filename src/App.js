import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import DrinkMenu from "./components/pages/DrinkMenu";
import NotFound from "./components/pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/losers-drink" component={DrinkMenu}></Route>
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
