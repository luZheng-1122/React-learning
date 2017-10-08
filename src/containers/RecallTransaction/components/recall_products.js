import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
    TableHeader,
    TableHeaderColumn,
  } from 'material-ui/Table';
  import Avatar from 'material-ui/Avatar';

class RecallProducts extends Component {
      
    render() {
        return (
            <Table selectable>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        {this.renderColumn()}
                    </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false} >
                    {this.renderBody()}
                </TableBody>
            </Table>
        );
    }

renderColumn = () => {
    let content = [];
    if(this.props.headerList) {
        const headerList = this.props.headerList;
        headerList.map( (column, index) => {
            return content.push(
                <TableHeaderColumn key={index}>{column}</TableHeaderColumn>
            );
        });
    }
    return content;
}

renderBody = () => {
    let content = [];

    if(this.props.tableData.length) {
        const list = this.props.tableData;
        list.map( (item,index) => {
            return content.push(
                <TableRow key={index}>
                    <TableRowColumn style={{ position: 'relative' }}>
                        <Avatar
                            src={item.imageProduct}
                            size={50}
                        />
                    </TableRowColumn>
                    <TableRowColumn>{item.name}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>6666</TableRowColumn>

                </TableRow>
            );
        })
    }
    else {
        content = (
            <TableRow>
                <TableRowColumn>The result is empty!</TableRowColumn>
            </TableRow>
        );
    }

    return content;
}

}

RecallProducts.propTypes = {
    headerList: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired
};

export default RecallProducts;