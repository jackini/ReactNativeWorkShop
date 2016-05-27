import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, StatusBar, StyleSheet, ListView} from 'react-native';
import NavBar from './../components/NavBar';
import UserCard from './../components/UserCard';
import {fetchUserList} from './../actions/userListAction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    }
});

class App extends Component {
    constructor() {
        super();

        StatusBar.setBarStyle('light-content');
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }

    componentWillMount() {
        this.props.fetchUserList();
    }

    render() {
        let users = this.props.userList || [];

        const ds = this.dataSource.cloneWithRows(users);
        return (
            <View style={styles.container}>
                <NavBar />
                <ListView
                    dataSource={ds}
                    renderRow={(user) =>
                    <UserCard user={user} />}
                />
            </View>
        )
    }
}

function mapProps(state) {
    return {
        userList: state.userList
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators({
        fetchUserList
    }, dispatch);
}

export default connect(mapProps, mapDispatch)(App)
