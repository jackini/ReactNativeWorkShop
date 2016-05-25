import {createStore} from 'redux';
import userListReducer from '../reducers/userListReducer';

let store = createStore(userListReducer);

export default store;   