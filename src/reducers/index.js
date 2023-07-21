
import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

export default allReducers;