import { combineReducers } from "redux";
import memories from "./memories";
import auth from "./auth";

export default combineReducers({ memories, auth });
