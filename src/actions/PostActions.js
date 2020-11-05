import * as CONST from '../utils/Constants';

export function fetchPosts() {
  return {
    type: CONST.FETCH_POSTS,
  };
}

export function fetchPostsSuccess(postData, userNames) {
  return {
    type: CONST.FETCH_POSTS_SUCCESS,
    payload: {
      postData: postData,
      userNames: userNames
    }
  };
}

export function fetchPostsFailure() {
  return {
    type: CONST.FETCH_POSTS_FAILURE,
  };
}

export function fetchComments(postId) {
  return {
    type: CONST.FETCH_COMMENTS,
    payload: {
      postId: postId
    }
  };
}

export function fetchCommentsSuccess(commentData) {
  return {
    type: CONST.FETCH_COMMENTS_SUCCESS,
    payload: {
      commentData: commentData,
    }
  };
}

export function fetchCommentsFailure() {
  return {
    type: CONST.FETCH_COMMENTS_FAILURE,
  };
}

export function deletePost(postId) {
  return {
    type: CONST.DELETE_POST,
    payload: {
      postId: postId
    }
  };
}

export function deletePostSuccess(postData) {
  return {
    type: CONST.DELETE_POST_SUCCESS,
    payload: {
      postData: postData
    }
  };
}

export function deletePostFailure() {
  return {
    type: CONST.DELETE_POST_FAILURE,
  };
}

export function resetDeletePostStatus() {
  return {
    type: CONST.RESET_DELETE_POST_STATUS,
  };
}
