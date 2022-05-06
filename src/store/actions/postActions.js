import { postService } from "../../services/postService"

export function loadPosts() {
    return async (dispatch) => {
        const posts = await postService.query()
        dispatch({ type: 'SET_POSTS', posts })
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