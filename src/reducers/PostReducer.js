import * as CONST from '../utils/Constants';

const initialState = {
  postData: [],
  userNames: {},
  isFetching: false,
  commentData: [],
  isFetchingComments: false,
  isPostDeleted: false
};

// This reducer stores the status of email verification.
export default function StartUpReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.FETCH_POSTS:
      return {
        ...state,
        postData: [],
        isFetching: true,
      };
    case CONST.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postData: action.payload.postData,
        userNames: action.payload.userNames,
        isFetching: false,
      };
    case CONST.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case CONST.FETCH_COMMENTS:
      return {
        ...state,
        commentData: [],
        isFetchingComments: true,
      };
    case CONST.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentData: action.payload.commentData,
        isFetchingComments: false,
      };
    case CONST.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isFetchingComments: false,
      };
    case CONST.DELETE_POST:
      return {
        ...state,
        isPostDeleted: false
      };
    case CONST.DELETE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload.postData,
        isPostDeleted: true
      };
    case CONST.DELETE_POST_FAILURE:
      return {
        ...state,
        isPostDeleted: false
      };
    case CONST.RESET_DELETE_POST_STATUS:
      return {
        ...state,
        isPostDeleted: false
      };
    default:
      return state;
  }
}
