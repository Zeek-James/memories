import * as api from "../api";
import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
  LIKE,
} from "../constants/actionTypes";

// Action Creators
export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemories();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createMemory = (memoryPost) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(memoryPost);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    await api.deleteMemory(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateMemory = (id, memoryPost) => async (dispatch) => {
  try {
    const { data } = await api.updateMemory(id, memoryPost);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const likeMemPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMemPost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
