import { FETCH_USERS, FETCH_USERS_NEXT } from '../actions/action_types.js';

export default function userReducer(
	state = { thisPage: [], nextPage: [], fullyLoaded: false },
	action
) {
	switch (action.type) {
		case FETCH_USERS:
			return {
				thisPage: action.thisPage,
				nextPage: action.nextPage,
				fullyLoaded: action.done
			};
		case FETCH_USERS_NEXT:
			return {
				thisPage: [...state.thisPage, ...state.nextPage],
				nextPage: action.payload,
				fullyLoaded: action.done
			};
		default:
			return state;
	}
}
