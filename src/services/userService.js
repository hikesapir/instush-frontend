import { utilService } from "./util-service"
import { storageService } from "./asyncStorageService"
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USER_KEY = 'userDb'
const gUsers = _createUsers()

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  // getUsers,
  getById,
  // remove,
  update,
  addFollower,
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
  }
  localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

async function getLoggedinUser() {
  // var user = await storageService.query()
  // if (!user.length) user = await login()
  // return user
  console.log();
  return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || login()
}

async function signup(userCred) {
  userCred.score = 10000;
  const user = await storageService.user('user', userCred)
  return storageService.user(STORAGE_KEY_LOGGEDIN_USER, user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

async function getById(userId) {
  if (!gUsers.length) _createUsers()
  const user = await storageService.getById(USER_KEY, userId)
  return user;
}

async function update(user) {
  await storageService.put(USER_KEY, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) storageService.user(STORAGE_KEY_LOGGEDIN_USER, user)
  return user;
}

async function addFollower(userId, miniUser) {
  const user = await storageService.getById(USER_KEY, userId)
  const idx = user.followers.findIndex(user => user._id === miniUser._id)
  if (idx === -1) user.followers.push(miniUser)
  else user.followers.splice(idx, 1)

  await storageService.put(USER_KEY, user)

  return user;
}






function getUsers() {
  return storageService.query('user')
}

function remove(userId) {
  return storageService.remove('user', userId)
}




async function _createUsers() {
  try {
    var users = await storageService.query(USER_KEY)
    if (!users || !users.length) {
      users = [
        {
          "_id": "u101",
          "username": "Muko",
          "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          "fullname": "Muki Muka",
          "password": "123",
          "createdAt": 1651504622095,
          "following": [
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            }
          ],
          "followers": [
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            }
          ],
          "savedPostIds": ["p101"],
          "stories": []
        },
        {
          "_id": "u102",
          "username": "Ulash",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
          "fullname": "Ulash Ulashi",
          "password": "123",
          "createdAt": 1651604622095,
          "following": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            }
          ],
          "followers": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            }
          ],
          "savedPostIds": ["p102"],
          "stories": ["s104", "s111", "s123"]
        },
        {
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
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            }
          ],
          "followers": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            }
          ],
          "savedPostIds": [],
          "stories": []
        },
        {
          "_id": "u104",
          "username": "Arthur_Reed",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414247/funday%20must/photo-1566492031773-4f4e44671857_pezzjc.jpg",
          "fullname": "Arthur Reed",
          "password": "123",
          "createdAt": 1653126806304,
          "following": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            },
            {
              "_id": "u103",
              "username": "guest",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
              "fullname": "ghost guest",
            }
          ],
          "followers": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            },
            {
              "_id": "u103",
              "username": "guest",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
              "fullname": "ghost guest",
            }
          ],
          "savedPostIds": ['p105', 'p102'],
          "stories": []
        },
        {
          "_id": "u105",
          "username": "redFox",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1653645729/instush/muql0fkpkczxpn98ivvo.jpg",
          "fullname": "Ginnifer Goodwin",
          "password": "123",
          "createdAt": 1653645268744,
          "following": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u103",
              "username": "guest",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
              "fullname": "ghost guest",
            }
          ],
          "followers": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u103",
              "username": "guest",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
              "fullname": "ghost guest",
            }
          ],
          "savedPostIds": [],
          "stories": []
        },
      ]
      return storageService.postMany(USER_KEY, users)
    } else return users

  } catch (err) {
    console.log('userService: createUsers had issue: ' + err);
  }
}



