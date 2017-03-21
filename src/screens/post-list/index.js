import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import PostList from 'containers/post-list';
import {actions as postActions} from 'store/data/posts';

const {fetchPosts} = postActions;

class Home extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPosts())
    }
    render() {
        return (
            <PostList />
        )
    }
}

// connect to component to access props.dispatch
export default connect((state) => ({}))(Home);