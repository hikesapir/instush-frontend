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
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.post._id ? action.post : post)
            }

        default:
            return state;
    }
}