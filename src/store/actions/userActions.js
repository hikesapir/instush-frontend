import { userService } from "../../services/userService"

export function loadLoggedinUser() {
    return async (dispatch) => {
        const loggedinUser = await userService.getLoggedinUser()
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser })
    }
}