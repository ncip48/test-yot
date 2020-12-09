import {
  FETCHING_TODOS_FAIL,
  FETCHING_TODOS_SUCCESS,
  FETCHING_TODOS,
} from '../api/constants';
import {put, takeEvery} from 'redux-saga/effects';
import api from '../api/api';

function* fetchTodos(action) {
  try {
    const data = yield api.fetchTodos(action.payload);
    yield put({type: FETCHING_TODOS_SUCCESS, data});
  } catch (e) {
    yield put({type: FETCHING_TODOS_FAIL});
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_TODOS, fetchTodos);
}

export default dataSaga;
