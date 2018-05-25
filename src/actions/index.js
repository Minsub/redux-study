import * as types from './ActionTypes'

import fetch from 'isomorphic-fetch';

export function increment() {
	return {
		type: types.INCREMENT
	}
}

export function decrement() {
	return {
		type: types.DECREMENT
	}
}
export function setColor(color) {
	return {
		type: types.SET_COLOR,
		color
	}
}

export function getPostAll() {
	console.log(fetch);
	fetch('http://jiminsub.iptime.org/spring/post/all')
	  .then(function(response) {
      return response.json();
		})
		.then(function(body) {
			console.log(`result: ${body}`);
			return {
				type: types.RESPONSE_POST_ALL,
				post: body
			};
		});
	return {
		type: types.REQUEST_POST_ALL,
		post: {}
	};
}
