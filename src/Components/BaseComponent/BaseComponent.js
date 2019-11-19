import React from 'react';
import './BaseComponent.css';
import TopBar from '../TopBarComponent/TopBarComponent';
import Menu from '../MenuComponent/MenuComponent';

export default class BaseComponent extends React.Component {
    render(){
        return(
            <div className="base">
                <TopBar></TopBar>
                <Menu></Menu>
            </div>
        );
    }
}
