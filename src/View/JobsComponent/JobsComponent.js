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
            sortBy : "best"
        }

        this.sort = this.sort.bind(this);
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
                </div>
            );
        }
            
        
    }

    getData(){
        this.setState({isLoading: true},() => {
            Service.getJobs(this.state.sortBy).then(res => {
                this.setState({isLoading: false, job: res});
            });
        });
    }

    sort(event){
        this.setState({sortBy: event.target.value}, () => {
            this.getData();
        });
    }
}