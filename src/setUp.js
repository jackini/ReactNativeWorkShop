import {Provider} from 'react-redux';
import App from './App';
import React, {Component} from 'react';
import {bindActionCreators, connect} from 'redux';
import store from './store/index';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}