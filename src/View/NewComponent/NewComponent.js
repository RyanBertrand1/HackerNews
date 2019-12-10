import React from 'react';
import Service from '../../Services/HnServices';
import ItemList from  '../../Components/ItemListComponent/ItemListComponent';
import { CircularProgress } from '@material-ui/core';

export default class NewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            addingItems: false,
            new: [],
            pages: 0
        }

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
                    <h1 data-testid="pagetitle">New</h1>
                    <ItemList data={this.state.new}></ItemList>
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
        Service.getNew(this.state.pages).then(res => {
            this.setState({isLoading: false, new: this.state.new.concat(res), addingItems: false});
        });
    }

    more(){
        this.setState({pages: this.state.pages + 1, addingItems: true}, () => {
            this.getData();
        })
    }
}