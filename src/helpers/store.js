import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../containers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
