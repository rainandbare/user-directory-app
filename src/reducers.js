export default function counter(
	state = { thisPage: [], nextPage: [], fullyLoaded: false, pageNumber: 1 },
	action
) {
	switch (action.type) {
		case 'PUT_USERS':
			return {
				thisPage: action.thisPage,
				nextPage: action.nextPage,
				fullyLoaded: action.done,
				pageNumber: action.pageNumber
			};
		case 'PUT_MORE_USERS':
			console.log('hello');
			return {
				thisPage: [...state.thisPage, ...state.nextPage],
				nextPage: action.nextPage,
				fullyLoaded: action.done,
				pageNumber: action.pageNumber
			};
		default:
			return state;
	}
}
