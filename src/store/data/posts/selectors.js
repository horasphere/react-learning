export function selectPosts(state) {
    const postById = state.data.posts.byId;

    return Object.keys(postById).map((postId) => {
        return postById[postId];
    })
}

export function isLoadingPosts(state) {
    return state.data.posts.isLoading;
}