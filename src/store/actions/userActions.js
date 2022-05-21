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
        dispatch({ type: 'SET_CURR_USER', currUser })
    }
}
export function savedPost(user, postId) {
    return async (dispatch) => {
        const idx = user.savedPostIds.findIndex(id => id === postId)
        if (idx === -1) user.savedPostIds.push(postId)
        else user.savedPostIds.splice(idx, 1)

        await userService.update(user)
        dispatch({ type: 'UPDATE_USER', user })
    }
}
export function startFollow(loggedinUser, userToFollow) {
    return async (dispatch) => {
        const idx = loggedinUser.following.findIndex(user => user._id === userToFollow._id)
        if (idx === -1) loggedinUser.following.push(userToFollow)
        else loggedinUser.following.splice(idx, 1)
        const user = await userService.update(loggedinUser)
        dispatch({ type: 'UPDATE_USER', user })
    }
}