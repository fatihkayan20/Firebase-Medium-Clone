import {
  LOADING_DATA,
  SET_POST,
  SET_POSTS,
  SET_TRENDING_POSTS,
} from "../types";

const initialState = {
  loading: false,
  posts: [],
  post: {},
  trendingPosts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_TRENDING_POSTS:
      return {
        ...state,
        trendingPosts: action.payload,
        loading: false,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
