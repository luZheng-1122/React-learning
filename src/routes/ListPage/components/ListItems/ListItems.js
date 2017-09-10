import React, {Component} from 'react';
import Item from '../../../../components/Item/Item';
import less from './ListItems.less'

export default class ListItems extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        let itemsList = this.props.list.posts;
        let colorSet = ['rgb(43,47,60)','rgb(62,149,205)','rgb(232,195,185)'];
        return itemsList.map((item,i) => {
            return (
                <Item key={i} item={item} colorBlock={colorSet[i]}/>
            );
        });
    }

    render() {
        return (
            <div id="ListItems">
                {this.renderItems()}
            </div>
        );
    }
}