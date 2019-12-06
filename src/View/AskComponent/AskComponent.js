import React from 'react';
import {CircularProgress, Select, MenuItem, FormControl} from '@material-ui/core';
import ItemList from '../../Components/ItemListComponent/ItemListComponent';
import Service from '../../Services/HnServices';

export default class AskComponent extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            ask: [],
            sortBy: "best"
        }

        this.sort = this.sort.bind(this);
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
                    <h1 data-testid="pagetitle">Ask</h1>
                    <FormControl>
                        <Select onChange={this.sort} value={this.state.sortBy}>
                            <MenuItem value="best">Best</MenuItem>
                            <MenuItem value = "newest">Newest</MenuItem>
                        </Select>
                    </FormControl>
                    <ItemList data={this.state.ask}></ItemList>
                </div>
            );
        }
    }

    getData(){
        this.setState({isLoading: true}, () => {
            Service.getAsk(this.state.sortBy).then(res => {
                this.setState({isLoading: false, ask: res});
            });
        });
    }
    
    sort(event){
        this.setState({sortBy: event.target.value}, () => {
            this.getData();
        });
    }
}