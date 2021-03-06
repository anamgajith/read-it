import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import LockIcon from "../../components/auth-head/lock-icon.component";

import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      emailerror: "",
      passworderror: "",
      nameerror: "",
      visibility: "hidden"
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ passworderror: "Password does not match" });
      return;
    }
    if (name === "") {
      this.setState({ nameerror: "Enter a valid name" });
      return;
    }

    try {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          if (userCredentials.user) {
            userCredentials.user
              .updateProfile({
                displayName: name
              })
              .then(s => {
                this.props.history.push("./dashboard");
              });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
      this.setState({
        visibility: "visible",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          this.setState({ emailerror: "Invalid email id" });
          break;
        case "auth/email-already-in-use":
          this.setState({
            emailerror: "The email address is already in use by another account"
          });
          break;
        case "auth/weak-password":
          this.setState({
            passworderror: "Password should be at least 6 characters"
          });
          break;
        default:
          this.setState({ error: "Something went wrong" });
      }
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      error: "",
      emailerror: "",
      passworderror: "",
      nameerror: ""
    });
  };

  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      passworderror,
      emailerror,
      error,
      nameerror,
      visibility
    } = this.state;
    return (
      <div className="main-signin">
        <form className="signin-container">
          <CircularProgress
            style={{ visibility: `${visibility}` }}
            className="progrss-loader"
          />
          <LockIcon />
          <Typography className="signin-text" component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            error={error.length !== 0 || nameerror.length !== 0}
            className="full"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Display Name"
            variant="outlined"
            helperText={nameerror}
            required
          />
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
            helperText={passworderror}
            required
          />
          <TextField
            error={error.length !== 0 || passworderror.length !== 0}
            className="full"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            variant="outlined"
            helperText={passworderror || error}
            required
          />
          <Button
            className="full"
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            SIGN UP
          </Button>
        </form>
        <Link className="link-to" to="/signin">
          Already have an account ? Sign In
        </Link>
      </div>
    );
  }
}

export default withRouter(SignUp);
