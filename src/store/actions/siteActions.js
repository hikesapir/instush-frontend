
export function setIsLoading(isLoading) {
    return async (dispatch) => {
        dispatch({ type: 'SET_IS_LOADING', isLoading })
    }
}