import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";
import currentItemReducer from "./currentItemReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    modal: modalReducer,
    search: searchReducer,
    currentItem: currentItemReducer
});

export default rootReducer;