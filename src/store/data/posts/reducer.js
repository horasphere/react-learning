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
                return {
                    type: FETCH_POSTS_SUCCESS,
                    posts
                }
            })
            .catch((error) => {
                return {
                    type: FETCH_POSTS_ERROR,
                    error
                }
            })
    }
}

const initialState = {
    byId: {},
    isLoading: false
};

function reducer(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_POSTS_REQUEST:
            return Object.assign(state, {
                isLoading: true
            })
        case FETCH_POSTS_SUCCESS:
            const postById = {};
            action.posts.forEach((post) => {
                postById[post.id] = post;
            })

            return {
                byId: postById,
                isLoading: false
            }
        case FETCH_POSTS_ERROR:
            return Object.assign(state, {
                isLoading: false
            })
    }

    return state;
}


export default reducer;
