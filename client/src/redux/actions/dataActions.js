import axios from "axios";
import {
  LOADING_DATA,
  SET_ERRORS,
  SET_POST,
  SET_POSTS,
  SET_TRENDING_POSTS,
} from "../types";

export const getTrendingPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/posts/trending")
    .then((res) => {
      dispatch({ type: SET_TRENDING_POSTS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const getAllPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/posts/getAll")
    .then((res) => {
      dispatch({ type: SET_POSTS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const getPostDetails = (username, slug) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/posts/${username}/${slug}`)
    .then((res) => {
      dispatch({ type: SET_POST, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
