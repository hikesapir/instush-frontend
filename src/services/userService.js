import { utilService } from "./util-service"
import { storageService } from "./asyncStorageService"
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    // getUsers,
    // getById,
    // remove,
    // update,
}

// Debug technique
window.userService = userService

async function login() {
    // const users = await storageService.query('user')
    const user = {
        "_id": "u103",
        "username": "guest",
        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
        "fullname": "ghost guest",
        "password": "123",
        "createdAt": 1651820923732,
        "following": [
            {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            },
            {
                "_id": "u102",
                "username": "Ulash",
                "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
            }
        ],
        "followers": [
            {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            },
            {
                "_id": "u102",
                "username": "Ulash",
                "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
            }
        ],
        "savedPostIds": [],
        "stories": []
    }
    return storageService.post(STORAGE_KEY_LOGGEDIN_USER, user)
}

async function getLoggedinUser() {
    var user = await storageService.query()
    if (!user.length) user = await login()
    return user
    //     return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function signup(userCred) {
    userCred.score = 10000;
    const user = await storageService.post('user', userCred)
    return storageService.post(STORAGE_KEY_LOGGEDIN_USER, user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}





async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user;
}

function getUsers() {
    return storageService.query('user')
}

function remove(userId) {
    return storageService.remove('user', userId)
}

async function update(user) {
    await storageService.put('user', user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) storageService.post(STORAGE_KEY_LOGGEDIN_USER, user)
    return user;
}






