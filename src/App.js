import React from "react";
import DashBoard from "./pages/dashboard/dashboard.component";
import SearchPage from "./pages/search/search.component";
import SignIn from "./pages/signin/signin.component";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
