import React from "react";
import DashBoard from "./pages/dashboard/dashboard.component";
import SearchPage from "./pages/search/search.component";
import SignIn from "./pages/signin/signin.component";
import SignUp from "./pages/signup/signup.component";
import Header from "./components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() =>
              this.props.currentUser ? <DashBoard /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/search"
            render={() =>
              this.props.currentUser ? <SearchPage /> : <DashBoard />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/dashboard" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/dashboard" /> : <SignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
