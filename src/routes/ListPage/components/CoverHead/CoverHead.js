import React, { Component } from 'react';
import less from './CoverHead.less'

export default class CoverHead extends Component {
    render()  {
        return (
            <div id="CoverHead">
                <img src={'/public/source/img/blogCover.png'}/>
            </div>
        );
    }
}