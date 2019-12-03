import React from 'react';
import TopList from '../../Components/TopListComponent/TopListComponent';
import Service from '../../Services/HnServices';
import ItemList from  '../../Components/ItemListComponent/ItemListComponent';
import { CircularProgress } from '@material-ui/core';

export default class NewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            topStories : [
                {
                    "by" : "user1",
                    "descendants" : 0,
                    "id" : 8863,
                    "kids" : [],
                    "score" : 111,
                    "time" : 1175714200,
                    "title" : "Title TopStory1",
                    "type" : "story",
                    "url" : "urlStory1.com",
                  },
                  {
                    "by" : "user2",
                    "descendants" : 0,
                    "id" : 8864,
                    "kids" : [],
                    "score" : 84,
                    "time" : 1175714200,
                    "title" : "Title TopStory2",
                    "type" : "story",
                    "url" : "urlStory2.com",
                  },
                  {
                    "by" : "user3",
                    "descendants" : 0,
                    "id" : 8865,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title TopStory3",
                    "type" : "story",
                    "url" : "urlStory3.com",
                  },
            ],

            newStories: [
                {
                    "by" : "user1",
                    "descendants" : 0,
                    "id" : 8866,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory1",
                    "type" : "story",
                    "url" : "urlStory1.com",
                },
                {
                    "by" : "user2",
                    "descendants" : 0,
                    "id" : 8867,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory2",
                    "type" : "story",
                    "url" : "urlStory2.com",
                },
                {
                    "by" : "user3",
                    "descendants" : 0,
                    "id" : 8868,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory3",
                    "type" : "story",
                    "url" : "urlStory3.com",
                },
                {
                    "by" : "user4",
                    "descendants" : 0,
                    "id" : 8869,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory4",
                    "type" : "story",
                    "url" : "urlStory4.com",
                },
                {
                    "by" : "user5",
                    "descendants" : 0,
                    "id" : 8870,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory5",
                    "type" : "story",
                    "url" : "urlStory5.com",
                },
                {
                    "by" : "user6",
                    "descendants" : 0,
                    "id" : 8871,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory6",
                    "type" : "story",
                    "url" : "urlStory6.com",
                },
                {
                    "by" : "user7",
                    "descendants" : 0,
                    "id" : 8872,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory7",
                    "type" : "story",
                    "url" : "urlStory7.com",
                },
                {
                    "by" : "user8",
                    "descendants" : 0,
                    "id" : 8873,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory8",
                    "type" : "story",
                    "url" : "urlStory8.com",
                },
                {
                    "by" : "user9",
                    "descendants" : 0,
                    "id" : 8874,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory9",
                    "type" : "story",
                    "url" : "urlStory9.com",
                },
                {
                    "by" : "user10",
                    "descendants" : 0,
                    "id" : 8875,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory10",
                    "type" : "story",
                    "url" : "urlStory10.com",
                },
                {
                    "by" : "user11",
                    "descendants" : 0,
                    "id" : 8876,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory11",
                    "type" : "story",
                    "url" : "urlStory11.com",
                },
                {
                    "by" : "user12",
                    "descendants" : 0,
                    "id" : 8877,
                    "kids" : [],
                    "score" : 57,
                    "time" : 1175714200,
                    "title" : "Title NewStory12",
                    "type" : "story",
                    "url" : "urlStory12.com",
                },
            ],
            
        }
    }

    componentDidMount(){
        Service.getTop3Stories().then(res =>{  
            this.setState({isLoading: false, topStories: res});
            
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
                    <TopList data = {this.state.topStories}></TopList>
                    <ItemList data={this.state.newStories}></ItemList>
                </div>
            );
        }
    }
}