import {Provider} from 'react-redux';
import App from './layouts/App';
import React from 'react';
import configureStore from './store/configureStore';

let store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}