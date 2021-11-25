import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,Routes,HashRouter } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home"
import Navigation from "./components/Navigation";

function App() {

  return (
  //   <Router>
  //     <Switch>
  //     <Navigation />
  //   <Route path="/movie/:id">
  //         <Detail />
  //       </Route>
  //     <Route path="/">
  //       <Home />
  //     </Route>

  //   </Switch>
  // </Router>

 
  <HashRouter>
  <Navigation />
  <Route path="/" exact={true} component={Home} />
  
  <Route path="/movie/:id" component={Detail} />
</HashRouter>

    
    );
}

export default App;
