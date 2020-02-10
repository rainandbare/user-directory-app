import React, { Component } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

class UserList extends Component {
	render() {
		const { users, onGetMoreUsers } = this.props;
		return (
			<div>
				<ul>
					{users.map(user => (
						<UserItem
							key={user.id}
							id={user.id}
							name={`${user.first_name} ${user.last_name}`}
						/>
					))}
				</ul>
				{console.log(this.props)}
				{this.props.fullyLoaded ? (
					<p>There are no more users to load!</p>
				) : (
					<button onClick={() => onGetMoreUsers()}>Get Users</button>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.thisPage,
		page: state.pageNumber,
		fullyLoaded: state.fullyLoaded
	};
}
export default connect(mapStateToProps, null)(UserList);
