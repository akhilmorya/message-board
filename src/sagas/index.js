import {takeLatest, all} from 'redux-saga/effects';
import {fetchPostSaga, fetchCommentSaga, deletePostSaga} from './postSaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.FETCH_POSTS, fetchPostSaga)]);
  yield all([takeLatest(CONST.FETCH_COMMENTS, fetchCommentSaga)]);
  yield all([takeLatest(CONST.DELETE_POST, deletePostSaga)]);
}
