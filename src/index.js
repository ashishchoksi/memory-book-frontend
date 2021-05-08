import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// This have access to store
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// Store the states
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
