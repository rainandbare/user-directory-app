import { FETCH_USERS, FETCH_USERS_NEXT } from './action_types';

export function fetchUsers() {
	return dispatch => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(result1 => {
				// formatResult(result1);
				fetch(`https://reqres.in/api/users?page=2`)
					.then(res => res.json())
					.then(result2 => {
						let done = false;
						if (result2.data.length < 0) {
							done = true;
						}
						dispatch({
							type: FETCH_USERS,
							thisPage: result1.data,
							nextPage: result2.data,
							done: done
						});
					});
			});
	};
}

export function fetchUsersNext(page) {
	return dispatch => {
		fetch(`https://reqres.in/api/users?page=${page}`)
			.then(res => res.json())
			.then(result => {
				let done = false;
				if (result.data.length <= 0) {
					done = true;
				}
				dispatch({
					type: FETCH_USERS_NEXT,
					nextPage: result.data,
					done
				});
			});
	};
}

// const formatResult = array => {
// 	console.log(array);
// };
