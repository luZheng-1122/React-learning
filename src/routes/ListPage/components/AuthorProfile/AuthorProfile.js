import React, { Component } from 'react';
import less from './AuthorProfile.less';

export default class AuthorProfile extends Component {
    constructor(props) {
        super(props);
    }
    // {this.props.config.global.description}

    getDetails = () => {
        let details = [];
        let data = require('../../../../actions/async/config.json');
        data = data.global;

        if(data.author) {
            details.push(
                <div className="name" key={data.author}>{data.author}</div>
            );
        }   
        if(data.description && data.email && data.wechat) {
            details.push(
                <div className="description" key={data.description}>
                    <p>{data.description}</p>
                    <p>Email me {data.email}</p>
                    <p>Friend me on wechat {data.wechat}</p>
                </div>
            );
        }
        if(data.git) {
            details.push(
                <div className="git" key={data.git}>
                    <a href={data.git}><img src={'/public/source/img/git.png'}/></a>
                </div>
            );
        }
        return details;
    }

    render()  {
        
        return (
            <div id="AuthorProfile">
                <h2>Me.</h2>
                <div id="contact-info">

                    <div id="details">{this.getDetails()}</div>
                    
                    <div id="image"></div>
                </div>
            </div>
        );
    }
}