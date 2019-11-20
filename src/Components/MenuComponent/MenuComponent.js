import React from 'react';
import './MenuComponent.css';
import {Link, BrowserRouter, Route} from 'react-router-dom';

const categories = ['New', 'Past', 'Comments', 'ask', 'show', 'jobs', 'submit']; 

export default class MenuComponent extends React.Component{

    render(){
        return(
            <div className="menu-list">
                <BrowserRouter>
                    {
                        categories.map(el => <h3 className="menu-item"><Link className="link">{el}</Link></h3>)
                    }
                </BrowserRouter>
            </div>
        );
    }
}