import React, {Component} from 'react';
import {Route} from 'react-router'

import PostList from 'screens/post-list';

export default [
    <Route path="/" component={PostList}></Route>,
]