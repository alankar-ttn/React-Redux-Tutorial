import { combineReducers } from "redux";
import authReducer from "./auth";
import counterReducer from "./counter";

const allReducers = combineReducers({
	counter: counterReducer,
	auth: authReducer,
});

export default allReducers;
