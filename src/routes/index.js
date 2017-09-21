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
                <Route  path='/post/:year/:month/:day/:name' component={PostPage}/> 
                <Route  path='/love' component={ListPage}/> 
            </Switch>     
            
            <div id="footer"></div>
        </div> 
            
    </Router> 
);