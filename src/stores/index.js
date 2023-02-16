import { legacy_createStore as createStore } from "redux";
import quoteReducer from "./reducer/mainReducer";

let store = createStore(quoteReducer);

export default store;
