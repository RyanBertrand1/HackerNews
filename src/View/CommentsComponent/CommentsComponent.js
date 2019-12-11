import React from 'react';
import Service from '../../Services/HnServices'
import {CircularProgress, Select, MenuItem, FormControl} from '@material-ui/core'
import CommentsList from '../../Components/CommentsListComponent/CommentsListComponent';

export default class CommentsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            isLoading: true,
            sortBy : "newest",
            pages: 0,
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
                <div className="categories" style={{bottom: '0', justifyContent: 'center'}}>
                    <CircularProgress></CircularProgress>
                </div>
            );
        } else {
            return(
                <div className="categories">
                    <h1 data-testid="pagetitle">Comments</h1>
                    <FormControl>
                        <Select onChange={this.sort} value={this.state.sortBy} style={{marginBottom: "2em"}}>
                            <MenuItem value="best">Best</MenuItem>
                            <MenuItem value ="newest">Newest</MenuItem>
                        </Select>
                    </FormControl>
                    <CommentsList comments={this.state.comments}></CommentsList>
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
        Service.getComments(this.state.sortBy, this.state.pages).then(res => {
            this.setState({isLoading: false, comments: this.state.comments.concat(res), addingItems: false});
        });
    }

    sort(event){
        this.setState({sortBy: event.target.value, pages: 0, comments: [], isLoading: true}, () => {
            this.getData();
        });
    }

    more(){
        this.setState({pages: this.state.pages+1, addingItems: true}, () =>{
            this.getData();
        });
    }
}