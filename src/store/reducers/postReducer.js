const INITIAL_STATE = {
    posts: null
}

export function postReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'ADD_POSTS':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case 'REMOVE_POSTS':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.postId)
            }
        case 'UPDATE_POSTS':
            console.log(action.savedPost);
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.savedPost._id ? action.savedPost : post)
            }

        default:
            return state;
    }
}