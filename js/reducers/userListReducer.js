import FETCH_USERS from '../reducers/userListReducer';

const initData = [];

export default function userListReducer(data = initData, action) {
    switch (action.type) {
        case  FETCH_USERS:
            return action.data;
    }
    return action.data;
}