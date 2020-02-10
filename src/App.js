/*eslint-disable no-unused-vars */
import React, { Component, useEffect } from 'react';
import { Route } from 'react-router-dom';
import UserList from './UserList';
import SingleUser from './SingleUser';
import Header from './Header';

class App extends Component {
	componentDidMount() {
		this.props.onGetUsers();
	}
	render() {
		return (
			<div>
				<Header />
				<Route
					exact
					path='/'
					render={() => (
						<UserList
							onGetMoreUsers={this.props.onGetMoreUsers}
							onGetUsers={this.props.onGetUsers}
						/>
					)}
				/>
				<Route path='/user/:id' component={SingleUser} />
			</div>
		);
	}
}

export default App;
