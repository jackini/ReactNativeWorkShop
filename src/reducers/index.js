import {combineReducers} from 'redux'
import userList from '../reducers/userListReducer'

const rootReducer = combineReducers({
    userList
});

export default rootReducer;
