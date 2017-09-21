import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import less from './AuthorProfile.less';

export default class AuthorProfile extends Component {

    getDetails = () => {
        let details = [];

        if(this.props.config) {
            const data = this.props.config.global;

            details.push( data.author ? <div className="name" key={data.author}>{data.author}</div> : '');
            if(data.descriptionO && data.descriptionT && data.descriptionTR ) {
                details.push(
                    <div className="description" key={data.description}>
                        <p>{data.descriptionO}</p>
                        <p>{data.descriptionT}</p>
                        <p>{data.descriptionTR}</p>
                        {/* <p>Email me {data.email}</p> */}
                        {/* <p>Friend me on wechat {data.wechat}</p> */}
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
        }
        return details;
    }

    render()  {
        
        return (
            <div id="AuthorProfile">
                <h2>We.</h2>
                <div id="contact-info">

                    <div id="details">{this.getDetails()}</div>
                    
                    <div id="image"></div>
                </div>
            </div>
        );
    }
}