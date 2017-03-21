import {fetchPosts as apiFetchPosts} from 'api';
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
} from 'store/actionTypes';

export function fetchPosts() {
    return (dispatch) => {
        dispatch({type: FETCH_POSTS_REQUEST})

        apiFetchPosts()
            .then((posts) => {
                dispatch({
                    type: FETCH_POSTS_SUCCESS,
                    posts
                })
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_POSTS_ERROR,
                    error
                })
            })
    }
}