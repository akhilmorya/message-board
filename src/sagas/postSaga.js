import {put, call, select} from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  deletePostSuccess,
  deletePostFailure,
  resetDeletePostStatus
} from '../actions/PostActions';
import {secureGet, secureDelete} from '../utils/SendJSON';

export function* fetchPostSaga() {
  try {
    const userData = yield call(secureGet, 'users');
    const postData = yield call(secureGet, 'posts');
    if (userData && postData) {
      let userNames = {};
      userData.map((item) => {
        userNames[item.id] = item.username;
      });
      yield put(fetchPostsSuccess(postData, userNames));
    } else {
      yield put(fetchPostsFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchPostsFailure());
  }
}

export function* fetchCommentSaga(action) {
  try {
    const commentData = yield call(
      secureGet,
      `comments?postId=${action.payload.postId}`,
    );
    if (commentData) {
      yield put(fetchCommentsSuccess(commentData));
    } else {
      yield put(fetchCommentsFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchCommentsFailure());
  }
}

export function* deletePostSaga(action) {
  try {
    const data = yield call(secureDelete, `posts/=${action.payload.postId}`);
    if (data) {
      const PostReducer = (state) => state.PostReducer;
      let {postData} = yield select(PostReducer);
      let updatePostData = postData
        .map((item) => {
          if (action.payload.postId != item.id) {
            return item;
          }
        })
        .filter((item) => {
          return item;
        });
      yield put(deletePostSuccess(updatePostData));
      yield put(resetDeletePostStatus());
    } else {
      yield put(deletePostFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(deletePostFailure());
  }
}
