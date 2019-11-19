import React from 'react';
import './MenuComponent.css';

const categories = ['New', 'Past', 'Comments', 'ask', 'show', 'jobs', 'submit']; 

export default class MenuComponent extends React.Component{

    render(){
        return(
            <div className="menu">
                {
                    categories.map(el => <h2>{el}</h2>)
                }
            </div>
        );
    }
}