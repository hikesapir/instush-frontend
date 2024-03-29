import { userService } from "../../services/userService"

export function loadLoggedinUser() {
    return async (dispatch) => {
        const loggedinUser = await userService.getLoggedinUser()
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser })
    }
}

export function login(userCred) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_IS_LOADING', isLoading: true })
            const loggedinUser = await userService.login(userCred)
            dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser })
        } catch (err) {
            console.log('userActions.login:', err)
            throw err
        } finally {
            dispatch({ type: 'SET_IS_LOADING', isLoading: false })
        }
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

export function startFollow(userToFollow) {
    return async (dispatch, getState) => {
        const { loggedinUser } = getState().userModule
        const { _id, username, imgUrl, fullname } = loggedinUser
        const idx = loggedinUser.following.findIndex(user => user._id === userToFollow._id)
        if (idx === -1) loggedinUser.following.push(userToFollow)
        else loggedinUser.following.splice(idx, 1)
        const user = await userService.update(loggedinUser)
        await userService.addFollower(userToFollow._id, { _id, username, imgUrl, fullname })
        dispatch({ type: 'UPDATE_USER', user })
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_USER_FILTER_BY', filterBy })
    }
}

export function loadUsers() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().userModule
        const users = await userService.query(filterBy)
        dispatch({ type: 'LOAD_USERS', users })
    }
}