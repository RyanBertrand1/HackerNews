import React from 'react';
import ItemList from '../../Components/ItemListComponent/ItemListComponent';
import {CircularProgress} from '@material-ui/core';
import Service from '../../Services/HnServices'

export default class AllComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading : true,
            topStories: [],
            all: [],
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        if(this.state.isLoading){
            return(
                <div className ="categories" style={{bottom: "0", justifyContent: "center"}}>
                    <CircularProgress>
                    </CircularProgress>
                </div>
            );
        }
        else{
            return(
                <div className="categories">
                    <h1>All</h1>
                    <ItemList data={this.state.all}></ItemList>
                    <h6 onClick={this.getData}>See more</h6>
                </div>
            );
        }
    }

    getData(){
        Service.getAll().then(res => {
            this.setState({all: this.state.all.concat(res), isLoading: false});
        });
    }
}