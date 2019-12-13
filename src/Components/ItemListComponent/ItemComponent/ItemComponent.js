import React from 'react';
import {Card, Link} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addNews } from '../../../actions';
import store from '../../../store';

class ItemComponent extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           item: props.item,
           visited: false
       } 

       this.openUrl = this.openUrl.bind(this);
    }

    componentDidMount(){
        this.setState({visited: this.props.visitedStories.includes(this.props.item.objectID)});
        console.log(this.props.visitedStories);
    }

    render(){
        return(
            <Card className="item-card">
                <div style={{height: '100%', padding: '0.5em', backgroundColor: this.state.visited ? "lightgrey" : "white", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
                    <div onClick={this.openUrl} style={{cursor: "pointer", height:"100%", maxHeight: '100%', display: "flex", flexDirection: "column", justifyContent:"space-between", alignItems: "center"}}>
                        <div>
                            <h4>
                                <span className="item-title" data-testid="title">{this.state.item.title}</span><br/>
                                <small className="url" data-testid="url">{this.state.item.url}</small>
                            </h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0.5em'}}>
                            <small style={{flex: 1}} data-testid="author">by {this.state.item.author}</small>
                            <small style={{flex: 1, display: 'flex', justifyContent:'flex-end'}} data-testid="points">{this.state.item.points} points</small>
                        </div>
                    </div> 
                
                    <div>
                        <small><Link style={{cursor: "pointer"}} to={`/story/${this.state.item.id}`}>{this.state.item.num_comments ? `${this.state.item.num_comments} comments` : ''}</Link></small>
                    </div>
                    
                </div>
            </Card>
        );
    }

    openUrl(){
        store.dispatch(addNews(this.state.item));
        window.location.href = this.state.item.url;
    }
}

function mapStateToProps(state) {
    const props = {
      visitedStories: state
    }
    return props;
  }
  
  export default withRouter(connect(mapStateToProps)(ItemComponent));