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
import IconButton from 'material-ui/IconButton';
import TiEdit from 'react-icons/lib/ti/edit';
import Report from 'react-icons/lib/md/report';
import View from 'react-icons/lib/md/pageview';

class ListTable extends Component {

    static contextTypes = {
        router: PropTypes.object
      }
      
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
                        {item.name}
                    </TableRowColumn>
                    <TableRowColumn>{`${item.createdAt.split('T')[0]} ${item.createdAt.split('T')[1].split('.')[0]}`}</TableRowColumn>
                    <TableRowColumn style={{ padding: '0px'}}>
                        {/* this button should be jump to the edit product page  */}
                        <IconButton disabled={(this.props.permission.update) ? false : true} touch onTouchTap={() => {
                        //try to call the get single product API to get the more reliable data
                        {/* this.props.productFindOne(product.id).then(res => {
                            const payload = res.payload ? res.payload : null;
                            console.log(payload);
                            if (payload.status === 200 ){
                            let productInfo = JSON.stringify(payload.data.data)
                            localStorage.setItem('editProductInfo', productInfo);
                            this.context.router.history.push('../product/' + product.id + '/edit', 'edit')
                            }
                        }) */}
                        }}
                        >
                        <TiEdit size={30} />
                        </IconButton>

                        <IconButton disabled={(this.props.permission.read) ? false : true} touch onTouchTap={() => {
                            this.context.router.history.push( '/recall/view' );
                        }}
                        >
                        <View size={30} />
                        </IconButton>

                        <IconButton disabled={(this.props.permission.read) ? false : true} touch onTouchTap={() => {
                        {/* this.context.router.history.push( '../track/'+ product.id ); */}
                        }}>
                        {/* Here!!! When click this button, should jump to a new page to show the qrcode   */}
                        <Report size={30} />
                        </IconButton>
                    </TableRowColumn>
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

ListTable.propTypes = {
    headerList: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired,
    //TODO: need to add access control!!
    permission: PropTypes.object.isRequired
};

export default ListTable;