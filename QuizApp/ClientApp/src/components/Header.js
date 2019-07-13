import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '&:hover': {
      color: 'inherit',
    },
  },
}));

const Header = (viewName) => {
  const classes = useStyles();
  // const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <QuestionAnswerIcon className={classes.icon} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          ACA Quiz
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {viewName.viewName}
        </Typography>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/"
        >
          Quizzes
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/questions"
        >
          Questions
        </Button>
        <Button className={classes.button} color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

//export default Header;

export default connect(
  state => state.viewName
)(Header);