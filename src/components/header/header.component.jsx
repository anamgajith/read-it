import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./header.styles.scss";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";

const Header = ({ currentUser, history }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <ImportContactsRoundedIcon fontSize="large" className="logo" />
    </Link>
    {currentUser ? (
      <div className="options">
        <div className="avatar" onClick={() => history.push("/dashboard")}>
          <Avatar
            alt={currentUser.displayName}
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : "http://fleischmen.com/wp-content/uploads/2017/11/user-avatar-placeholder.png"
            }
          />
          {currentUser.displayName}
        </div>
        <ExitToAppIcon
        className="option"
          onClick={async () => {
            await auth.signOut();
            history.push("/");
          }}
        />
      </div>
    ) : (
      <div className="options">
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
        <Link className="option" to="/signup">
          SIGN UP
        </Link>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(Header));
