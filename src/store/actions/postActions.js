import { postService } from "../../services/postService"

export function loadPosts() {
    return async (dispatch) => {
        const posts = await postService.query()
        dispatch({ type: 'SET_POSTS', posts })
    }
}