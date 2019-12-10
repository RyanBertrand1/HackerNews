import React from 'react';
import Item from '../ItemListComponent/ItemComponent/ItemComponent';

export default class ItemListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visitedStories: []
        }
    }

    componentDidMount(){
        let localeStories = localStorage.getItem('visitedStories');
        this.setState({visitedStories: localeStories ? localeStories : []});
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.data.length !== nextProps.data.length
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em'}}>
                <div className="item-list">
                    {
                        this.props.data.map((item, index) => {
                            return <Item item={item} key={index}></Item>
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