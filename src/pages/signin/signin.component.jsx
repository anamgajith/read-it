import React from "react";
import "./signin.styles.scss";
import TextField from "@material-ui/core/TextField";
import GoogleButton from "react-google-button";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import LockIcon from "../../components/auth-head/lock-icon.component";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="main-signin">
        <form className="signin-container">
          <LockIcon />
          <Typography className="signin-text" component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            className="full"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email adress"
            variant="outlined"
            required
          />
          <TextField
            className="full"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
            helperText={error}
            required
          />
          <GoogleButton className="full" onClick={signInWithGoogle} />
          <Button
            className="full"
            type="submit"
            variant="contained"
            color="primary"
          >
            SIGN IN
          </Button>
        </form>
        <Link className="link-to" to="/signup">
          Don't have an account ? Sign Up
        </Link>
      </div>
    );
  }
}