import React, { Component } from 'react';

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        let URL = this.props.match.params.id;
        console.log(URL);
    }

    getData = () => {
        const data = require('../../../actions/async/posts/2017/08/19/hello-world.json');
        console.log(data);
        return (
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        );
    }

    render()  {
        return (
            <div id="PostPage">{this.getData()}</div>
        );
    }
}