import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import LockIcon from "../../components/auth-head/lock-icon.component";

import "./signup.styles.scss";

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="main-signin">
        <form className="signin-container">
          <LockIcon />
          <Typography className="signin-text" component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            className="full"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            label="Display Name"
            variant="outlined"
            required
          />
          <TextField
            className="full"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email adress"
            variant="outlined"
            required
          />
          <TextField
            className="full"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
            required
          />
          <TextField
            className="full"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            variant="outlined"
            required
          />
          <Button
            className="full"
            type="submit"
            variant="contained"
            color="primary"
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
