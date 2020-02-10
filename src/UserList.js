import React, { Component } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersNext } from './actions/user_actions';

class UserList extends Component {
	constructor() {
		super();
		this.state = {
			page: 1
		};
	}
	componentDidMount() {
		this.props.fetchUsers();
	}
	loadMore = () => {
		let newPage = this.state.page;
		// //we have already fetched the information for the real next page and will just replace it. We need to know if there is available data on the page AFTER that.
		newPage = newPage + 2;
		this.props.fetchUsersNext(newPage);
	};
	render() {
		return (
			<div>
				<ul>
					{console.log(this.props.users.thisPage)}
					{this.props.users.thisPage.map(user => (
						<UserItem
							key={user.id}
							id={user.id}
							name={`${user.first_name} ${user.last_name}`}
						/>
					))}
				</ul>
				{this.props.fullyLoaded ? null : (
					<button onClick={this.loadMore}>Load More</button>
				)}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		users: state.user,
		fullyLoaded: state.user.fullyLoaded
	};
}
export default connect(mapStateToProps, { fetchUsers, fetchUsersNext })(
	UserList
);
