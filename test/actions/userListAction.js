import {fetchUserList} from '../../src/actions/userListAction';
import { assert } from 'chai';

describe('actions fetchUserList', () => {

    it('should return userList array', () => {
        var userList = fetchUserList();
        
        assert.equal(userList.type,'FETCH_USERS');
        assert.equal(userList.data.length,2);
    });
});