import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactPage from './components/redux/ContactPage';

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
      <ContactPage />
    </Provider>,
    document.getElementById('root')
);
