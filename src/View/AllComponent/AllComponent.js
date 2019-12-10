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
            pages: 0,
            addingItems: true
        }

        this.getData = this.getData.bind(this);
        this.more = this.more.bind(this);
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
                    <h1 data-testid="pagetitle">All</h1>
                    <ItemList data={this.state.all}></ItemList>
                    {this.state.addingItems === false &&
                        <button onClick={this.more}>more</button>
                    }
                    {this.state.addingItems === true &&
                        <CircularProgress></CircularProgress>
                    }
                </div>
            );
        }
    }

    getData(){
        Service.getAll(this.state.pages).then(res => {
            this.setState({all:this.state.all.concat(res), isLoading: false, addingItems: false});
        });
    }

    more(){
        this.setState({addingItems: true, pages: this.state.pages+1}, () => {
            this.getData();
        });
    }
}