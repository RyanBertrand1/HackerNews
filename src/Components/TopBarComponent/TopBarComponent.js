import React from 'react';
import {TextField, IconButton, Icon} from '@material-ui/core';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

export default class TopBarComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query : "",
            search: false
        }
        this.changeKeyword = this.changeKeyword.bind(this);
        this.search = this.search.bind(this);
    }

    render(){
        return(
            <div className="top-bar">
                <div className="title">
                    <Link className="link" style={{color: 'black', textDecoration: 'none', cursor: "pointer"}} to="/">
                        <img alt="y" src='https://news.ycombinator.com/y18.gif' className="y-img"/>
                        <h2>HackerNews</h2>
                    </Link> 
                </div>

                <div className="tool">
                    <IconButton color="inherit">
                        <Icon>
                            brightness_5
                        </Icon>
                    </IconButton>
                    <TextField label="search" variant="filled" className="search-bar" onChange={this.changeKeyword} onKeyUp={this.search}></TextField>
                </div>
                {this.state.search === true &&
                    <Redirect to={`/search/${this.state.query}`}></Redirect>
                }
            </div>
        );
    }

    changeKeyword(event){
        this.setState({query: event.target.value});
    }

    search(event){
        if(event.key === "Enter"){
            this.setState({search: true}, () => {
                this.setState({search : false})
            });
        }
    }
}