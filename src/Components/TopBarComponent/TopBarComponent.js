import React from 'react';
import {TextField, IconButton, Icon} from '@material-ui/core';


export default class TopBarComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            keyword : ""
        }
        this.changeKeyword = this.changeKeyword.bind(this);
        this.search = this.search.bind(this);
    }

    render(){
        return(
            <div className="top-bar">
                <div className="title">
                    <img alt="y" src='https://news.ycombinator.com/y18.gif' className="y-img"/>
                    <h2>HackerNews</h2>
                </div>

                <div className="tool">
                    <IconButton color="inherit">
                        <Icon>
                            brightness_5
                        </Icon>
                    </IconButton>
                    <TextField label="search" variant="filled" className="search-bar" onChange={this.changeKeyword} onKeyUp={this.search}></TextField>
                </div>
            </div>
        );
    }

    changeKeyword(event){
        this.setState({keyword: event.target.value});
    }

    search(event){
        if(event.key === "Enter"){
            window.location.href = `https://hn.algolia.com/?q=${this.state.keyword}`;
        }
    }
}