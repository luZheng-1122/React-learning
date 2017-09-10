import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Top from '../components/Top/Top'
import ListPage from './ListPage/containers/ListPage';
import PostPage from './PostPage/containers/PostPage';

export default () => (
    <Router history={createBrowserHistory()}>
            
        <div id="deerBlog">
            <Top />
            <div id="side"></div> 
                
            <Switch>                          
                <Route  path='/post/:id' component={PostPage}/> 
                <Route  path='/home' component={ListPage}/> 
            </Switch>     
            
            <div id="footer"></div>
        </div> 
            
    </Router> 
);