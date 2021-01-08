import {
  FETCH_ALL,
  DELETE,
  CREATE,
  UPDATE,
  LIKE,
} from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [action.payload, ...state];

    case UPDATE:
    case LIKE:
      return state.map(
        (memoryPost) => [ memoryPost._id = action.payload._id ? action.payload : memoryPost, ...state]
      );

    case DELETE:
      return state.filter((memoryPost) => memoryPost._id !== action.payload);

    default:
      return state;
  }
};
