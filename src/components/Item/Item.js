import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import less from './Item.less'

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.item);
        let item = this.props.item;
        return (
            <Link to={'/post' + item.url} style={{color: 'black'}}>
                <div className="Item">
                    <div className="content">
                        <span className="title">{item.title}</span>
                        <span className="date">{item.path.day}/{item.path.month}/{item.path.year}</span>
                    </div>
                    <span className="colorBlock" style={{backgroundColor: this.props.colorBlock}}></span>
                </div>
            </Link>
        );
    }
}