import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import less from './Item.less'

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        const path = item.path; 
        return (
            <Link to={'/post/' + path.year + '/' + path.month + '/' + path.day + '/' + path.name} style={{color: 'black'}}>
                <div className="Item">
                    <div className="content">
                        <span className="title">{item.title}</span>
                        <span className="date">{path.day}/{path.month}/{path.year}</span>
                    </div>
                    <span className="colorBlock" style={{backgroundColor: this.props.colorBlock}}></span>
                </div>
            </Link>
        );
    }
}