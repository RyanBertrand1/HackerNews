import React from 'react';
import {Card, Link} from '@material-ui/core';

export default class ItemComponent extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           item: props.item,
       } 

       this.openUrl = this.openUrl.bind(this);
    }

    render(){
        return(
            <Card className="item-card">
                <div onClick={this.openUrl} style={{cursor: "pointer", height:"100%", display: "flex", flexDirection: "column", justifyContent:"space-between", alignItems: "center"}}>
                    <div>
                        <h4>
                            {this.state.item.title}<br/>
                            <small className="url">{this.state.item.url}</small>
                        </h4>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', height: "1.5em"}}>
                        <small>by {this.state.item.author}</small>
                        <small>{this.state.item.points} points</small>
                    </div>
                </div>
                <div>
                    <small><Link style={{cursor: "pointer"}} to={`/story/${this.state.item.id}`}>{this.state.item.num_comments} comments</Link></small>
                </div>
            </Card>
        );
    }

    openUrl(){
        window.location.href = this.state.item.url;
    }
}