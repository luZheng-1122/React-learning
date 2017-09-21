import React, { Component } from 'react';
import less from './CoverHead.less'

export default class CoverHead extends Component {

    constructor(props){
        super(props);
    }
    
    getCover = () => {
        let content = [];
        if(this.props.picture) {
            content.push(
                <img key={this.props.picture} src={this.props.picture}/>
            );
        }
        return content;
    }
    render()  {
        return (
            <div id="CoverHead">
                {this.getCover()}
            </div>
        );
    }
}