import React from 'react';
import Service from '../../Services/HnServices';
import ItemList from  '../../Components/ItemListComponent/ItemListComponent';
import { CircularProgress } from '@material-ui/core';

export default class NewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            new: [],
        }
    }

    componentDidMount(){
        Service.getNew().then(res => {
            this.setState({isLoading: false, new: res})
        });
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
                    <h1>New</h1>
                    <ItemList data={this.state.new}></ItemList>
                </div>
            );
        }
    }
}