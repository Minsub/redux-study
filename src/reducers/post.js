import * as types from '../actions/ActionTypes';

export const initialState = {
	post: {}
};

export default function post(state = initialState, action) {
	switch(action.type) {
		case types.RESPONSE_POST_ALL: 
			return { post: action.post };
		default:
			return state;
	}
}
