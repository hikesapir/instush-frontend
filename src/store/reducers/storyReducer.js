const INITIAL_STATE = {
    stories: null
}

export function storyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_STORIES':
            return {
                ...state,
                stories: action.stories
            }
        default:
            return state;
    }
}