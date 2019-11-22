import React from 'react';
import Item from '../ItemListComponent/ItemComponent/ItemComponent';

export default class ItemListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            visitedStories: []
        }
    }

    componentDidMount(){
        let localeStories = localStorage.getItem('visitedStories');
        this.setState({visitedStories: localeStories ? localeStories : []});
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em'}}>
                <h3>
                    Newest
                </h3>
                <div className="item-list">
                    {
                        this.state.data.map(item => {
                            return <Item item={item} key={item.id}></Item>
                        })
                    }
                </div>
            </div>
        );
    }

    /*addVisitedStory(story){
        this.setState({visitedStories : [ ...this.state.visitedStories, story.id]});
        localStorage.setItem('visitedNews', this.state.visitedStories);
    }*/
}