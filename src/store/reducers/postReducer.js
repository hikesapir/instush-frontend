const INITIAL_STATE = {
    posts: [],
    filterBy: { page: 0, pageSize: 3 },
    postInfo: null
}

export function postReducer(state = INITIAL_STATE, action) {
    // console.log(action);
    switch (action.type) {
        case 'SET_POSTS':
            // console.log(action.posts);
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            }
        case 'SET_POST_INFO':
            // console.log(action.info);
            return {
                ...state,
                postInfo: action.info
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
                posts: state.posts.map(post => post._id === action.savedPost._id ? action.savedPost : post)
            }
        case 'SET_POST_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'CLEAR_POSTS':
            return {
                ...state,
                posts: []
            }

        default:
            return state;
    }
}