import JSONPlaceholder from '../apis/JSONPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await JSONPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
}