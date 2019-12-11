import  React from 'react';

export default class CommentComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comment : {}
        }
    }

    componentDidMount(){
        this.setState({comment: this.props.comment}, () => {
            document.getElementById(this.state.comment.objectID).innerHTML = this.state.comment.comment_text;
        });

    }

    render(){
        return(
            <div className="comment">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <h5>By {this.state.comment.author} on :</h5>
                        <a href={this.state.comment.story_url} style={{textDecoration: "none"}}><h5 style={{marginLeft: '0.5em', color: 'grey'}}>{this.state.comment.story_title}</h5></a>
                    </div>
                    <h6>{this.state.comment.points ? this.state.comment.points : 0} points</h6>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <div id={this.state.comment.objectID} style={{width:'98%'}}>
                    </div>
                </div>
            </div>
        );
    }
}