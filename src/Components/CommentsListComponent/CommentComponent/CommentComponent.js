import  React from 'react';

export default class CommentComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comment : {}
        }
    }

    componentDidMount(){
        this.setState({comment: this.props.comment})
    }

    render(){
        return(
            <div>
                {this.state.comment.author}
            </div>
        );
    }
}