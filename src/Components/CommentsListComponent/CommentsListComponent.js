import React from 'react';
import Comment from './CommentComponent/CommentComponent'

export default class CommentsListComponent extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        return this.props.comments.length !== nextProps.comments.length
    }

    render(){
        return(
            this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)
        );
    }
}