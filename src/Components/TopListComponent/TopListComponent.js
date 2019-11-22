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
        Top 3
      </Typography>
      <Grid container spacing={3}>
        {
          props.data.map(e => {
              return <Grid item xs={12} key={e.id}>
                        <Paper className={classes.paper}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <span>by {e.by}</span>
                          <span>{e.score} points</span>
                        </div>
                        <h4><a href={e.url} style={{color: 'black', textDecoration: 'none'}}>{e.title}</a></h4>
                        </Paper>
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
