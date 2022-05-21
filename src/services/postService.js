import { utilService } from "./util-service"
import { storageService } from "./asyncStorageService"
//CRUDL CREAT READ UPDATE DELETE LIST

export const postService = {
  query,
  updatePost,
  getById
}
const POST_KEY = 'postDB'
const gPosts = _createPosts()


async function query(filterBy) {
  const posts = await gPosts
  return posts
}

async function savePost(post) {
  try {
    if (post._id) {
      var res = await storageService.put(POST_KEY, post)
    } else {
      var res = await storageService.post(POST_KEY, post)
    }
    return res
  } catch (err) {
    console.log('save err', err);
    throw err
  }
}

async function updatePost(caseType, post, data) {

  switch (caseType) {
    case 'like-clicked':
      var idx = post.likedBy.findIndex(user => user._id === data._id)
      if (idx === -1) post.likedBy.push(data)
      else post.likedBy.splice(idx, 1)
      break;
    case 'add-comment':
      data.id = utilService.makeId()
      data.createdAt = Date.now()
      post.comments.push(data)
      break;
  }
  return await savePost(post)
}

async function getById(id) {
  if (!gPosts.length) _createPosts()
  const post = await storageService.getById(POST_KEY, id)
  return post;
}

async function _createPosts() {
  try {
    var posts = await storageService.query(POST_KEY)
    if (!posts || !posts.length) {
      posts = [
        {
          "_id": "p101",
          "txt": "Point of view",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1651604330/instush/wjj9a7ucw8xauyvikxiq.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1651604385128,
          "by": {
            "_id": "u101",
            "username": "Muko",
            "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
            "fullname": "Muki Muka",
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Tel Aviv"
          },
          "comments": [
            {
              "id": "c1001",
              "by": {
                "_id": "u102",
                "username": "Ulash",
                "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
                "fullname": "Ulash Ulashi"
              },
              "txt": "good one!",
              "likedBy": [ // Optional
                {
                  "_id": "u101",
                  "username": "Muko",
                  "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                  "fullname": "Muki Muka",
                }
              ]
            }
          ],
          "likedBy": [
            {
              "_id": "u102",
              "username": "Ulash",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
              "fullname": "Ulash Ulashi"
            }],
          "tags": ["fun", "kids"]
        },
        {
          "_id": "p102",
          "txt": "Best trip ever",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1651604328/instush/vivezflwf8hfyr8i4mgl.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1651605049742,
          "by": {
            "_id": "u102",
            "username": "Ulash",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
            "fullname": "Ulash Ulashi"
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Tel Aviv"
          },
          "comments": [
            {
              "id": "c1001",
              "by": {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                "fullname": "Muki Muka",
              },
              "txt": "good one!",
              "likedBy": [ // Optional
                {
                  "_id": "u102",
                  "username": "Ulash",
                  "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
                  "fullname": "Ulash Ulashi"
                }
              ]
            }
          ],
          "likedBy": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u104",
              "username": "Arthur_Reed",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414247/funday%20must/photo-1566492031773-4f4e44671857_pezzjc.jpg",
              "fullname": "Arthur Reed"
            }
          ],
          "tags": ["fun", "kids"]
        },
        {
          "_id": "p103",
          "txt": "Yallow Yallow Yallow",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1651604327/instush/vbrw5yuallei875r7mtk.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1651909292535,
          "by": {
            "_id": "u102",
            "username": "Ulash",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
            "fullname": "Ulash Ulashi"
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Netanya"
          },
          "comments": [
            {
              "id": "c1001",
              "by": {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                "fullname": "Muki Muka",
              },
              "txt": "good one!",
              "likedBy": [ // Optional
                {
                  "_id": "u102",
                  "username": "Ulash",
                  "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
                  "fullname": "Ulash Ulashi"
                }
              ]
            }
          ],
          "likedBy": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            }
          ],
          "tags": ["fun", "kids"]
        },
        {
          "_id": "p104",
          "txt": "Yamy",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1647806296/samples/food/dessert.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1652550132483,
          "by": {
            "_id": "u103",
            "username": "guest",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648463489/funday%20must/vote_1_bkio4y.png",
            "fullname": "ghost guest",
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Secret"
          },
          "comments": [
            {
              "id": "c1001",
              "by": {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                "fullname": "Muki Muka",
              },
              "txt": "good one!",
              "likedBy": [ // Optional
                {
                  "_id": "u102",
                  "username": "Ulash",
                  "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
                  "fullname": "Ulash Ulashi"
                }
              ]
            }
          ],
          "likedBy": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            }
          ],
          "tags": ["fun", "kids"]
        },
        {
          "_id": "p105",
          "txt": "Outfit of today!!",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1647806303/samples/ecommerce/accessories-bag.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1652550311096,
          "by": {
            "_id": "u102",
            "username": "Ulash",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
            "fullname": "Ulash Ulashi"
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Home"
          },
          "comments": [
            {
              "id": "c1001",
              "by": {
                "_id": "u101",
                "username": "Muko",
                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                "fullname": "Muki Muka",
              },
              "txt": "good one!",
              "likedBy": [ // Optional
                {
                  "_id": "u102",
                  "username": "Ulash",
                  "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
                  "fullname": "Ulash Ulashi"
                }
              ]
            }
          ],
          "likedBy": [
            {
              "_id": "u101",
              "username": "Muko",
              "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              "fullname": "Muki Muka",
            },
            {
              "_id": "u104",
              "username": "Arthur_Reed",
              "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414247/funday%20must/photo-1566492031773-4f4e44671857_pezzjc.jpg",
              "fullname": "Arthur Reed"
            }
          ],
          "tags": ["fun", "kids"]
        }, {
          "_id": "p106",
          "txt": "Good vecation",
          "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1647806302/samples/landscapes/beach-boat.jpg", //Can be an array if decide to support multiple imgs
          "createdAt": 1653154439403,
          "by": {
            "_id": "u102",
            "username": "Ulash",
            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg",
            "fullname": "Ulash Ulashi"
          },
          "loc": {
            "lat": 11.11,
            "lng": 22.22,
            "name": "Thailand"
          },
          "comments": [],
          "likedBy": [],
          "tags": []
        },
      ]
      return storageService.postMany(POST_KEY, posts)
    } else return posts

  } catch (err) {
    console.log('postService: createPosts had issue: ' + err);
  }
}