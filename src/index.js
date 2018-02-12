import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Test from './components/Test';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers';
// import * as actions from './actions';

const store = createStore(reducers);

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200,200,200]));

// unsubscribe();
// store.dispatch(actions.setColor([210,210,210]));


ReactDOM.render(
	<Provider store={store}>
		<Test/>
	</Provider>,
	document.getElementById('root')
);

