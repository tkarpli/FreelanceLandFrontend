import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actionCommentsPostCreators} from "../taskActions"
import  logo from '../../store/default-logo.jpg';

import "./comments.css";

class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Color: '',
            commentContent: '',
            commentError: ''
        };

        this.contentChange = this.contentChange.bind(this);
        this.sendMyComment = this.sendMyComment.bind(this);
    }

    contentChange(event){
        this.setState({commentContent: event.target.value});
    }

    validateComment(content){
        let comment = content;
        let commentError = '';
        if(!(comment.length > 0))
        {
            commentError = "This space cant be empty";
        }
        this.setState({commentError: commentError});
        if(commentError)
        {
            this.setState({Color: "red"});
            return false;
        }
        this.setState({Color: "green"});
        return true;
    }

    validationForm(){
        const validComment = this.validateComment(this.state.commentContent);
        if(validComment)
            return true;
        else
            return false;
    }

    sendMyComment(event) {
        const valid = this.validationForm();
        if (valid)
        {
            this.props.sendComment(this.state.commentContent, this.props.userId, this.props.taskId).
            then(() => {
                document.getElementById("text-content").value = "";
            });
                
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="container" id="add-comment">
             <div className='row' >
                  <div className="col-md-1" >
                  { (this.props.userphoto != "empty") ?
                  <img id="user-photo"  src={this.props.userphoto} alt="user photo" />
                  :
                  <img id="user-photo" src={logo} alt="User photo"></img>
                  }
                  </div>
                  <div className="col-md-10">
                  <input  type="text" id="text-content" placeholder="write your comment to start working" 
                        onChange={this.contentChange} defaultValue={this.state.commentError} name="contentTextBox"/>
                  </div>
                  <div className="col-md-1">
                  <input  type="button" id="submit" value="Send" onClick={this.sendMyComment}/>
                  </div>
              </div>
            </div>
        );
    }
}

export default connect(
    state => state.addComment,
    dispatch => bindActionCreators(actionCommentsPostCreators, dispatch)
)(AddComment);