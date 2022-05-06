import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/postReducer";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
    postModule: postReducer,
    userModule: userReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))