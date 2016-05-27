import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers/index';

let middlewares = [
    thunkMiddleware
];

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
    predicate: () => isDebuggingInChrome,
    collapsed: true,
    duration: true
});

if (isDebuggingInChrome) {
    middlewares.push(logger);
}

export default function configStore(initialState)
{
    const store = applyMiddleware(
        ...middlewares
    )(createStore)(reducers, initialState);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}
