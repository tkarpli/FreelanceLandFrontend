import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import ChatRoomItem from './ChatRoomItem';
import ChatRoomsList from './ChatRoomsList';


class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatRoomsList: []
        };
    }

    componentWillMount()
    { 
        this.props.requestChatRoomsList(localStorage.getItem('id'));
        this.setState({chatRoomsList: this.props.chatRooms});
    }

    render() {
        
        console.log(this.props.chatRooms);
        return(
            <ChatRoomsList chatRoomsList={this.props.chatRooms} isLoading={this.props.isLoading}/>
        )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(MessagePage);