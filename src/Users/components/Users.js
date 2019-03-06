import React ,{Component} from 'react';
import Pagination from './Pagination';
import UsersList from "./UsersList";
import FilterComponent from './FilterComponent'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../action';
import './styles.css';

class Users extends Component {
    componentWillMount() {
        this.props.requestUsersList();
    }

    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <div className="container">
               
                <div className="main-content container">
                    <div className="row">
                        <div className="col-md-9" id="j-orders-search-list">
                        {console.log(this.props.users)}
                            <UsersList usersList={this.props.users} isLoading={this.props.isLoading}/>
                        </div>
                        <div className="col-md-3" >
                        <FilterComponent/>
                        </div>
                    </div >
                    <Pagination/>
                        
                    </div>
            </div >
        );
    }
}

export default connect(
    state => state.usersReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Users);