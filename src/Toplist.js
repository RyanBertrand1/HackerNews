import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const classes = useStyles();

export default class TopList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: this.props.data
    }
  }

  render(){
    return(
      <div>
      <Typography variant="subtitle1" gutterBottom>
        Top 3 des News
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
            <Paper className={classes.paper}>News 1</Paper>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
            <Paper className={classes.paper}>News 2</Paper>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
            <Paper className={classes.paper}>News 3</Paper>
        </Grid>
            <Grid item xs={2}>
        </Grid>
      </Grid>
      </div>
    );
  }
}
