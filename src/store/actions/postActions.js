import { postService } from "../../services/postService"

export function loadPosts() {
    return async (dispatch) => {
        const posts = await postService.query()
        dispatch({ type: 'SET_POSTS', posts })
    }
}

export function addPost(post) {
    return async (dispatch) => {
        var newPost = {
            "txt": post.txt,
            "imgUrl": post.imgUrl, //Can be an array if decide to support multiple imgs
            "createdAt": Date.now(),
            "by": post.by,
            "loc": {
                "name": post.loca,
            },
            "comments": [],
            "likedBy": [],
            "tags": []
        }
        newPost = await postService.savePost(newPost)
        dispatch({ type: 'ADD_POSTS', post:newPost })
    }
}

export function likeClicked(post, user) {
    return async (dispatch) => {
        try {
            const savedPost = await postService.updatePost('like-clicked', post, user)
            dispatch({ type: 'UPDATE_POSTS', savedPost })

        } catch (err) {
            console.log('err:', err)

        }
    }
}

export function addComment(post, user, comment) {
    return async (dispatch) => {
        try {
            const savedPost = await postService.updatePost('add-comment', post, user, comment)
            dispatch({ type: 'UPDATE_POSTS', savedPost })
        } catch (err) {
            console.log('err:', err)

        }

    }
}