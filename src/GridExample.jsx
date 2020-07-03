import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  background: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GridExample = () => {
  const classes = useStyles();

  const [screenWidth, setScreenWidth] = useState(0);
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    updateBreakpoint();
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      updateBreakpoint();
    });
  }, []);

  const updateBreakpoint = () => {
    if (window.innerWidth < 600) {
      setBreakpoint("xs");
    } else if (window.innerWidth < 960) {
      setBreakpoint("sm");
    } else if (window.innerWidth < 1280) {
      setBreakpoint("md");
    } else if (window.innerWidth < 1920) {
      setBreakpoint("lg");
    } else {
      setBreakpoint("xl");
    }
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h3">
          Screen Width: {screenWidth}px <br />
          Size: {breakpoint} <br />
          <br />
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        spacing={3}
        className={classes.background}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/**************************************** */}
        {/* hide when screen size is "sm" or below */}
        {/**************************************** */}
        <Hidden smDown>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
          <Grid item md={2} lg={1}>
            <Paper className={classes.paper}>md=2 lg=1</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default GridExample;
