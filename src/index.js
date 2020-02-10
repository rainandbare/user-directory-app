import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootSaga from './sagas';
import reducer from './reducers';

import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App
					onGetMoreUsers={() => {
						action('FETCH_MORE_USERS');
					}}
					onGetUsers={() => action('FETCH_USERS')}
				/>
			</Router>
		</Provider>,
		document.getElementById('root')
	);
}

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
