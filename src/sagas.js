// eslint-disable-next-line require-yield
import { select, all, call, delay, put, takeEvery } from 'redux-saga/effects';

const getPageNumber = state => state.pageNumber;

export function* getUsers() {
	let thisPage = [];
	let nextPage = [];
	let done = false;

	yield fetch('https://reqres.in/api/users')
		.then(res => res.json())
		.then(result1 => {
			thisPage = result1.data;
		});
	yield fetch(`https://reqres.in/api/users?page=2`)
		.then(res => res.json())
		.then(result2 => {
			nextPage = result2.data;
			if (result2.data.length < 0) {
				done = true;
			}
		});
	yield put({
		type: 'PUT_USERS',
		thisPage,
		nextPage,
		done,
		pageNumber: 1
	});
}

export function* getMoreUsers() {
	const pageNumber = yield select(getPageNumber);
	const pageToSearch = pageNumber + 2;
	const nextPageNumber = pageNumber + 1;
	let nextPage = [];
	let done = false;
	console.log(pageToSearch);
	yield fetch(`https://reqres.in/api/users?page=${pageToSearch}`)
		.then(res => res.json())
		.then(result => {
			console.log(result.data);
			nextPage = result.data;
			if (result.data.length <= 0) {
				done = true;
			}
		});
	yield put({
		type: 'PUT_MORE_USERS',
		nextPage,
		done,
		pageNumber: nextPageNumber
	});
}

export function* watchFetchUsers() {
	yield takeEvery('FETCH_USERS', getUsers);
}

export function* watchFetchMoreUsers() {
	yield takeEvery('FETCH_MORE_USERS', getMoreUsers);
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([call(watchFetchUsers), call(watchFetchMoreUsers)]);
}

// formatResult(result1);
// fetch(`https://reqres.in/api/users?page=2`)
// 	.then(res => res.json())
// 	.then(result2 => {
// 		let done = false;
// 		if (result2.data.length < 0) {
// 			done = true;
// 		}
// 		dispatch({
// 			type: FETCH_USERS,
// 			thisPage: result1.data,
// 			nextPage: result2.data,
// 			done: done
// 		});
// 	});
