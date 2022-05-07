import { userService } from "../../services/userService"

export function loadLoggedinUser() {
    return async (dispatch) => {
        const loggedinUser = await userService.getLoggedinUser()
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser })
    }
}
export function loadCurrnUser(id) {
    return async (dispatch) => {
        const currUser = await userService.getById(id)
        console.log(currUser);
        dispatch({ type: 'SET_CURR_USER', currUser })
    }
}