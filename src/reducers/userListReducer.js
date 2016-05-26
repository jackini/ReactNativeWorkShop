import {FETCH_USERS} from '../constants';

const initialState = [];

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case  FETCH_USERS:
            return action.data;
    }
    return state;
}