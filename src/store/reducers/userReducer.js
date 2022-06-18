const INITIAL_STATE = {
    loggedinUser: null,
    currUser: null,
    filterBy: null,
    users: null
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
            console.log('up', action.user);
            return {
                ...state,
                loggedinUser: action.user
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'LOAD_USERS':
            return {
                ...state,
                users: action.users
            }

        default:
            return state;
    }
}