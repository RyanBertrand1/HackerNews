import React from 'react';
import Service from '../../Services/HnServices';
import {CircularProgress, FormControl, Select, MenuItem} from '@material-ui/core';
import ItemList from '../../Components/ItemListComponent/ItemListComponent';
import {useParams} from 'react-router-dom';

export default function SearchResults(){
    let { query } = useParams();

    return (
        <SearchResultComponent query={query}></SearchResultComponent>
    );
}

class SearchResultComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            isLoading: true,
            pages: 0,
            sortBy: 'best',
            addingItems: false,
            query: this.props.query
        }

        this.sort = this.sort.bind(this);
        this.more = this.more.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.query !== this.props.query){
            this.setState({query: nextProps.query, pages: 0, results: []}, () => {
                this.getData()
            });
        }
         return nextProps.query !== this.props.query
    }

    render(){
        if(this.state.isLoading){
            return(
                <div className="categories" style={{bottom: "0", justifyContent:"center"}}>
                    <CircularProgress></CircularProgress>
                </div>
            );
        } else {
            return(
                <div className="categories">
                    <h1>Results for "{this.state.query}"</h1>
                    <FormControl>
                        <Select onChange={this.sort} value={this.state.sortBy}>
                            <MenuItem value="best">Best</MenuItem>
                            <MenuItem value="newest">Newest</MenuItem>
                        </Select>
                    </FormControl>
                    <ItemList data={this.state.results}></ItemList>
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
        Service.getSearchResults(this.state.sortBy,this.state.pages, this.state.query).then(res => {
            this.setState({isLoading: false, addingItems: false, results: this.state.results.concat(res)}, () => {
                this.forceUpdate();
            })
        });
    }

    sort(event){
        this.setState({sortBy: event.target.value, isLoading: true, pages: 0, results: []}, () => {
            this.forceUpdate();
            this.getData();
        });
    }

    more(){
        this.setState({addingItems: true, pages: this.state.pages+1}, () => {
            this.forceUpdate();
            this.getData();
        });
    }
}