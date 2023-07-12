const INITIAL_STATE = {
    isLoading: false,
}

export function siteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}