import React from "react";
import "./signin.styles.scss";
import TextField from "@material-ui/core/TextField";
import GoogleButton from "react-google-button";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from '@material-ui/core/Typography';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
          <LockOutlinedIcon className="lock" />
          <Typography className="signin-text" component="h1" variant="h5">
            Sign in
          </Typography>
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
          <GoogleButton className="full"></GoogleButton>
          <Button
            className="full"
            type="submit"
            variant="contained"
            color="primary"
          >
            SIGN IN
          </Button>
        </form>
      </div>
    );
  }
}
