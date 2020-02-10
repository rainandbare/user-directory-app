import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleUser extends Component {
	render() {
		return <div>This is the single used</div>;
	}
}

function mapStateToProps(state) {
	return {
		users: state.user,
		fullyLoaded: state.user.fullyLoaded
	};
}
export default connect(mapStateToProps, null)(SingleUser);
