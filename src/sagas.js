import { call, put } from 'redux-saga';
function* loadTodos() {
	yield put({ type: 'FETCHING_TODOS' });
	const todos = yield call(fetch, '/todos');
	yield put({ type: 'FETCHED_TODOS', payload: todos });
}

export default loadTodos;
