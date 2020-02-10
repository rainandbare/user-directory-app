import React from 'react';
import { Link } from 'react-router-dom';

function UserItem(props) {
	return (
		<li>
			<Link to={`/user/${props.id}`}>{props.name}</Link>
		</li>
	);
}

export default UserItem;
