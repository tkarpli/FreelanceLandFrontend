import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../actions';
import TaskItemList from './TaskItemList';
import SearchBar from './SearchBar';
import ScrollTop from './ScrollTop';
import Filter from './Filter';
import Pagination from './Pagination';
import '../styles.css';


class Tasks extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestTasksList();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="container">
                <SearchBar />
                <div className="main-content container">
                    <div className="row">
                        <div className="col-md-9" id="j-orders-search-list">
                            <TaskItemList tasksList={this.props.tasks} isLoading={this.props.isLoading}/>
                        </div>
                        <div className="col-md-3">
                            <Filter tasksCount={this.props.tasks.length}/>
                        </div>
                    </div >
                    <Pagination/>
                </div >
                <ScrollTop />
            </div >
        );
    }
}

export default connect(
    state => state.tasksReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Tasks);