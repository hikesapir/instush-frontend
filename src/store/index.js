import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/postReducer";
import { storyReducer } from "./reducers/storyReducer";
import { userReducer } from "./reducers/userReducer";
import { siteReducer } from "./reducers/siteReducer";


const rootReducer = combineReducers({
    postModule: postReducer,
    storyModule: storyReducer,
    userModule: userReducer,
    siteModule: siteReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))