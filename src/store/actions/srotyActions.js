import { storyService } from "../../services/storyService"

export function loadStories() {
    return async (dispatch) => {
        const stories = await storyService.query()
        dispatch({ type: 'SET_STORIES', stories })
    }
}