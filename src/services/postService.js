import { utilService } from "./util-service"
import { storageService } from "./asyncStorageService"
//CRUDL CREAT READ UPDATE DELETE LIST

export const postService = {
    query,
    updatePost
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
            data.createdAt = Date.now()
            post.comments.push(data)
            break;
    }
    return await savePost(post)
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
                        "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
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
                                "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
                            },
                            "txt": "good one!",
                            "likedBy": [ // Optional
                                {
                                    "_id": "u101",
                                    "username": "Muko",
                                    "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            ]
                        }
                    ],
                    "likedBy": [
                        {
                            "_id": "u102",
                            "username": "Ulash",
                            "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
                        }
                    ],
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
                        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
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
                                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            "txt": "good one!",
                            "likedBy": [ // Optional
                                {
                                    "_id": "u102",
                                    "username": "Ulash",
                                    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
                                }
                            ]
                        }
                    ],
                    "likedBy": [
                        {
                            "_id": "u101",
                            "username": "Muko",
                            "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
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
                        "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
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
                                "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            "txt": "good one!",
                            "likedBy": [ // Optional
                                {
                                    "_id": "u102",
                                    "username": "Ulash",
                                    "imgUrl": "https://res.cloudinary.com/mistertoysss/image/upload/v1648414285/funday%20must/photo-1618085222100-93f0eecad0aa_fuisxo.jpg"
                                }
                            ]
                        }
                    ],
                    "likedBy": [
                        {
                            "_id": "u101",
                            "username": "Muko",
                            "imgUrl": "https://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        }
                    ],
                    "tags": ["fun", "kids"]
                }
            ]
            return storageService.postMany(POST_KEY, posts)
        } else return posts

    } catch (err) {
        console.log('postService: createPosts had issue: ' + err);
    }
}