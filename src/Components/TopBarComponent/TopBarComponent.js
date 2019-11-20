import React from 'react';
import {TextField, Button, IconButton, Badge, Icon} from '@material-ui/core';


export default class TopBarComponent extends React.Component{
    render(){
        return(
            <div className="top-bar">
                <div className="title">
                    <img src='https://news.ycombinator.com/y18.gif' className="y-img"/>
                    <h2>HackerNews</h2>
                </div>

                <div className="tool">
                    <IconButton color="inherit">
                        <Icon>
                            brightness_5
                        </Icon>
                    </IconButton>
                    <TextField label="search" variant="filled" className="search-bar"></TextField>
                </div>
            </div>
        );
    }
}