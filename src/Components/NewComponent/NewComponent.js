import React from 'react';
import TopList from '../TopListComponent/Toplist';
import Service from '../../Services/HnServices';

export default class NewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount(){
        Service.getTopStories().then(res => {
            this.setState({data:res.data});
            console.log(this.state.data);
        })
    }

    render(){
        return(
            <div className="categories">
                <h1>New</h1>
                <TopList data = {this.state.data}></TopList>
            </div>
        );
    }
}