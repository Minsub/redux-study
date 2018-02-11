import * as types from '../actions/ActionTypes';

export const initialState = {
	number: 0,
	dummy: 'dummy',
	dumbObject: {
		d: 1,
		u: 2,
		m: 3
	}
};

export default function counter(state = initialState, action) {
	switch(action.type) {
		case types.INCREMENT: 
			return { ...state, number: state.number + 1, dumbObject: { ...state.dumbObject, u: 1 } };
		case types.DECREMENT: 
			return { ...state, number: state.number - 1 };
		default:
			return state;
	}
} 