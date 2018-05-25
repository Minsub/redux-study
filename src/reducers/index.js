import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';
import post from './post';

const reducers = combineReducers({
	counter, ui, post
})

export default reducers;
