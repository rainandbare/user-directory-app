import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatResult from './helpers';

class SingleUser extends Component {
	render() {
		const formattedResult = formatResult(this.props.users);
		return (
			<div>
				{this.props.users.length > 0 ? (
					<div>
						<p>ID: {this.props.match.params.id}</p>
						<img
							alt='avatar'
							src={
								formattedResult[this.props.match.params.id]
									.avatar
							}
						></img>
						<p>Name:</p>
						<p>{`${
							formattedResult[this.props.match.params.id]
								.first_name
						} ${
							formattedResult[this.props.match.params.id]
								.last_name
						}`}</p>
						<p>Email:</p>
						<p>
							{formattedResult[this.props.match.params.id].email}
						</p>
					</div>
				) : null}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.thisPage
	};
}
export default connect(mapStateToProps, null)(SingleUser);
