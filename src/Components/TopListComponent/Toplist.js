import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  }
}));


function List(props){
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Top 3 des News
      </Typography>
      <Grid container spacing={3}>
        {
          props.data.map(e => {
              console.log(e);
              return <Grid container spacing={3}  key={e}>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={12} key ={e}>
                        <Paper className={classes.paper}>{e}</Paper>
                      </Grid>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={2}></Grid>
                    </Grid>
            }
          )
        }
      </Grid>
    </div>
  );
}

export default class TopList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: this.props.data,
    }
  }

  render(){
    return(
      <List data = {this.state.data}></List>
    );
  }
}
