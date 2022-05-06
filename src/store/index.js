import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/postReducer";
import { storyReducer } from "./reducers/storyReducer";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
    postModule: postReducer,
    storyModule: storyReducer,
    userModule: userReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))