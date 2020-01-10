import React from "react";
import "./signin.styles.scss";
import TextField from "@material-ui/core/TextField";
import GoogleButton from "react-google-button";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import LockIcon from "../../components/auth-head/lock-icon.component";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      emailerror: "",
      passworderror: ""
    };
  }

  validateMail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!this.validateMail(email)) {
      this.setState({ emailerror: "Enter a valid email id" });
      return;
    }

    if (!password) {
      this.setState({ passworderror: "Ener a valid password" });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          this.setState({ error: "User not found" });
          break;
        default:
          this.setState({ error: "Check your credentials" });
          break;
      }
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      error: "",
      emailerror: "",
      passworderror: ""
    });
  };

  render() {
    const { email, password, error, emailerror, passworderror } = this.state;
    return (
      <div className="main-signin">
        <form className="signin-container">
          <LockIcon />
          <Typography className="signin-text" component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            error={error.length !== 0 || emailerror.length !== 0}
            className="full"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email adress"
            variant="outlined"
            helperText={emailerror}
            required
          />
          <TextField
            error={error.length !== 0 || passworderror.length !== 0}
            className="full"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
            helperText={error || passworderror}
            required
          />
          <GoogleButton className="full" onClick={signInWithGoogle} />
          <Button
            className="full"
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
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
