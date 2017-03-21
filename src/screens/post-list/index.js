import React, {Component, PropTypes} from 'react';

import {fetchPosts} from 'api';

fetchPosts().then(console.log)

class Home extends Component {
    render() {
        return (
            <h1 className="page-header container text-center">React Learning Project!</h1>
        )
    }
}

export default Home;