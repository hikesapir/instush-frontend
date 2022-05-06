const INITIAL_STATE = {
    loggedinUser: null
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_LOGGEDIN_USER':
            return {
                ...state,
                loggedinUser: action.loggedinUser
            }
       

        default:
            return state;
    }
}