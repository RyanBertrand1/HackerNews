import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  }
}));

export function CSSGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper className={classes.paper}>News 1</Paper>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper className={classes.paper}>News 2</Paper>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper className={classes.paper}>News 3</Paper>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export function Tri() {
  const elements = ["News 1", "News 2", "News 3"];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

export function TopTrois() {
  const classes = useStyles();
  const elements = ["News 1", "News 2", "News 3"];
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2} />

        {elements.map(e => {
          return;
          <Grid item xs={8}>
            <Paper className={classes.paper}>{e}</Paper>;
          </Grid>;
        })}

        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
