import React from 'react';
import ItemList from '../../Components/ItemListComponent/ItemListComponent';
import {CircularProgress, Select, FormControl, MenuItem} from '@material-ui/core';
import Service from '../../Services/HnServices';

export default class JobsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            job: [],
            sortBy : "best",
            pages:0,
            addingItems: false,
        }

        this.sort = this.sort.bind(this);
        this.more = this.more.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        if(this.state.isLoading){
            return(
                <div className="categories" style={{bottom: "0", justifyContent: "center"}}>
                    <CircularProgress></CircularProgress>
                </div>
            );
        } else {
            return (
                <div className="categories">
                    <h1 data-testid="pagetitle">Jobs</h1>
                    <FormControl>
                        <Select onChange={this.sort} value={this.state.sortBy}>
                            <MenuItem value="best">Best</MenuItem>
                            <MenuItem value="newest">Newest</MenuItem>
                        </Select>
                    </FormControl>
                    <ItemList data={this.state.job}></ItemList>
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
        Service.getJobs(this.state.sortBy, this.state.pages).then(res => {
            this.setState({isLoading: false, job: this.state.job.concat(res), addingItems:false});
        });
    }

    sort(event){
        this.setState({sortBy: event.target.value, pages: 0, job: [], isLoading:true}, () => {
            this.getData();
        });
    }

    more(){
        this.setState({pages: this.state.pages+1, addingItems: true}, () => {
            this.getData();
        });
    }
}