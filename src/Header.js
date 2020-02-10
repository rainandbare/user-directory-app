import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<h1>List of Users</h1>
					<ul>
						<li>
							<Link to='/'>All Users</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;
