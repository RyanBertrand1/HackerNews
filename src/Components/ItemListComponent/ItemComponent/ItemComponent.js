import React from 'react';
import {Card} from '@material-ui/core';

export default class ItemComponent extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           item: props.item,
       } 
    }

    render(){
        return(
            <Card className="item-card">
                <div>
                    <h4>
                        {this.state.item.title}<br/>
                        <small>({this.state.item.url})</small>
                    </h4>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
                    <small>by {this.state.item.by}</small>
                    <small>{this.state.item.score} points</small>
                </div>

            </Card>
        );
    }
}