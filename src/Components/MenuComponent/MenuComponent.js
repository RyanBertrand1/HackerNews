import React from 'react';
import './MenuComponent.css';
import {Link, BrowserRouter, Route} from 'react-router-dom';

const categories = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit']; 

export default class MenuComponent extends React.Component{

    render(){
        return(
            <div className="menu-list">
                    {
                        categories.map(el => <h3 className="menu-item" key={el}><Link className="link" to={`/${el}`}>{el}</Link></h3>)
                    }
            </div>
        );
    }
}