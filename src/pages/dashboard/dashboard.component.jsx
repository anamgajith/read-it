import React from "react";
import "./dashboard.styles.scss";
import NavTabs from "../../components/tab-panel/tab-panel.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectBooks, selectFetch } from "../../redux/books/books.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateBooks } from "../../api/api.utils";

class DashBoard extends React.Component {
  componentDidMount() {
    if (this.props.fetch) {
      updateBooks(this.props.user, this.props.books);
    }
  }

  componentDidUpdate() {
    updateBooks(this.props.user, this.props.books);
  }

  render() {
    return (
      <div>
        <NavTabs className="nav-tab" />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  fetch: selectFetch,
  books: selectBooks
});

export default connect(mapStateToProps)(DashBoard);
