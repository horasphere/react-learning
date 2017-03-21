import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectors as postSelectors} from 'store/data/posts'

const {
    selectPosts,
    isLoadingPosts
} = postSelectors;


class PostList extends Component {
    render() {
        if(this.props.dispatch) {
            console.log('dispatch')
        }

        const {
            isLoading,
            posts
        } = this.props;

        if(isLoading) {
            return <div>loading....</div>
        }

        return (
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}> {post.title}</li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: selectPosts(state),
    isLoading: isLoadingPosts(state)
})

export default connect(mapStateToProps)(PostList);