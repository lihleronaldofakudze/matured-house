import React, { Fragment } from "react";

//Material UI
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

//Navbar Styles
const useStyles = makeStyles((theme) => {
  return {
    app_bar: {
      backgroundColor: "#FFFFFF",
      padding: "1rem .2rem",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      flex: 1,
    },
    button: {
      fontSize: 18,
      margin: "0 .5rem",
      "&:hover": {
        color: "#1DA5D3",
        textDecoration: "underline",
      },
    },
    icon: {
      "&:hover": {
        color: "#1DA5D3",
      },
    },
  };
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar
        position="sticky"
        color="default"
        className={classes.app_bar}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h2" className={classes.logo}>
            Maturedhouse
          </Typography>
          <Button
            variant="text"
            color="inherit"
            startIcon={<i class="bi bi-house-fill"></i>}
            className={classes.icon}
          ></Button>
          <Button variant="text" color="inherit" className={classes.button}>
            Mixes
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="small"
            className={classes.button}
          >
            About
          </Button>
          <Button variant="text" color="inherit" className={classes.button}>
            Contact
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<i class="bi bi-soundwave"></i>}
            className={classes.icon}
          ></Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<i class="bi bi-facebook"></i>}
            className={classes.icon}
          ></Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<i class="bi bi-camera2"></i>}
            className={classes.icon}
          ></Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<i class="bi bi-instagram"></i>}
            className={classes.icon}
          ></Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default Navbar;
