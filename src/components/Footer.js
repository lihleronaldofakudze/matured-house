import React from "react";

//Material  Ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      top: "auto",
      bottom: 0,
      backgroundColor: "#333333",
      color: "#FFFFFF",
      padding: "3rem 2rem",
      width: "100%",
    },
    button: {
      justifyContent: "flex-start",
      color: "#1DA6D2",
      fontSize: 18,
      fontFamily: "Poor Story",
    },
    about: {
      color: "#767676",
    },
  };
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Toolbar />
      <AppBar
        position="fixed"
        color="inherit"
        className={classes.footer}
        elevation={0}
      >
        <Grid container spacing={1}>
          <Grid item md={3} xs={12}>
            <Typography variant="h4" color="initial">
              About
            </Typography>
            <div className="sized_box_half"></div>
            <Typography
              variant="subtitle1"
              color="initial"
              className={classes.about}
            >
              Started in 2001, Mateuredhouse is a mix-site run by Dusty Dude.
              The archives contain hundreds of hours of deep underground
              electronic music mixed by resident & guest DJ's.
            </Typography>
            <div className="sized_box_half"></div>
            <Typography
              variant="subtitle1"
              color="initial"
              className={classes.about}
            >
              Deeprhythms works on a non-profit basis - the sole purpose is to
              give exposure to the artists, labels & DJ's.
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="h4" color="initial">
              Latest
            </Typography>
            <div className="sized_box_half"></div>

            <Button
              variant="text"
              fullWidth
              color="inherit"
              className={classes.button}
              size="small"
            >
              Voluptate amet minim duis mollit.
            </Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="h4" color="initial">
              Subscribe
            </Typography>
            <div className="sized_box_half"></div>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-envelope"></i>}
              className={classes.button}
              size="small"
            >
              Mailing list
            </Button>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-vinyl"></i>}
              className={classes.button}
              size="small"
            >
              Spotify Podcast
            </Button>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-youtube"></i>}
              className={classes.button}
              size="small"
            >
              Youtube Podcast
            </Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="h4" color="initial">
              Elsewhere
            </Typography>
            <div className="sized_box_half"></div>
            <Button
              variant="text"
              color="inherit"
              fullWidth
              startIcon={<i class="bi bi-soundwave"></i>}
              className={classes.button}
              size="small"
            >
              Soundcloud
            </Button>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-facebook"></i>}
              className={classes.button}
              size="small"
            >
              Facebook group
            </Button>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-camera2"></i>}
              className={classes.button}
              size="small"
            >
              Clout Developers
            </Button>
            <Button
              variant="text"
              fullWidth
              color="inherit"
              startIcon={<i class="bi bi-instagram"></i>}
              className={classes.button}
              size="small"
            >
              Instagram
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </footer>
  );
};

export default Footer;
