import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateItem } from "../../redux/books/books.actions";
import {
  selectPending,
  selectReading,
  selectCompleted
} from "../../redux/books/books.selectors";
import BooksDisplay from "../books-display/books-display.component";
import "./tab-panel.styles.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const NavTabs = ({ pending, reading, completed, updateItem }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tab-main">
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="WISHLIST" {...a11yProps(0)} />
          <Tab label="READING" {...a11yProps(1)} />
          <Tab label="COMPLETED" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <BooksDisplay
          books={pending}
          buttonText="Start Reading"
          action={updateItem}
          enableAdd={true}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BooksDisplay
          books={reading}
          buttonText="COMPLETED"
          action={updateItem}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BooksDisplay
          books={completed}
          buttonText="REMOVE"
          action={updateItem}
        />
      </TabPanel>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pending: selectPending,
  reading: selectReading,
  completed: selectCompleted
});

const mapDispatchToProps = dispatch => ({
  updateItem: item => dispatch(updateItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);
