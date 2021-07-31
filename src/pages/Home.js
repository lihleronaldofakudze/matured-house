import React from "react";

//Extra
import clsx from "clsx";

//Material UI
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => {
  return {
    intro: {
      backgroundColor: "#1DA6D2",
      height: 240,
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={clsx("sized_box_2", classes.intro)}>
        <Typography variant="h1" color="initial">
          Just good underground electronic music.
        </Typography>
      </div>
    </Container>
  );
};

export default Home;
