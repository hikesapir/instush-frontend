const INITIAL_STATE = {
    loggedinUser: null,
    currUser: null
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_LOGGEDIN_USER':
            return {
                ...state,
                loggedinUser: action.loggedinUser
            }
        case 'SET_CURR_USER':
            return {
                ...state,
                currUser: action.currUser
            }
        case 'UPDATE_USER':
            return {
                ...state,
                loggedinUser: action.user
            }


        default:
            return state;
    }
}