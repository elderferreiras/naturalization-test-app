import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    userReducer: userReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(
    applyMiddleware(thunk)
));

export default store
