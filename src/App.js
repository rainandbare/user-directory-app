import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import UserList from './UserList';
import SingleUser from './SingleUser';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<h1>List of Users</h1>
					<ul>
						<li>
							<Link to='/'>All Users</Link>
						</li>
					</ul>
				</nav>
				<Route exact path='/' component={UserList} />
				<Route path='/user/:id' component={SingleUser} />
			</div>
		</Router>
	);
}

export default App;
