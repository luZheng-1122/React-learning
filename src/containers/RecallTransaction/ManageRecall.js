import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import ReUseTitle from '../../components/reusefulTitle';
import Loading from '../../components/Loading';
import NoPermission from '../../components/NoPermision';
import ListTable from './components/list_table';
import NoAccess from './components/no_access';
import SearchBar from './components/search_bar';
import PaginationBar from './components/pagination_bar';

import { findAllProducts } from '../../actions/index';

class ManageRecall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [],
            search: '',
            //for pagination
            currentPage: 1,
            record: 6,
            total: 1,
            //for loading
            loading: true
        };
    }

    componentDidMount() {
        const term = '';
        this.getProducts(this.state.currentPage, this.state.record, term);
    }

    render() {
        let content = [];
        let rolePermission = JSON.parse(localStorage.getItem('userRolesList'));
        const headerList = ['name','date','action'];

        const termSearch = _.debounce( (search) => {
            //term, record are both global var in this class, there is no need to make it a state
            this.setState( {search, currentPage : 1}, () => {
                this.getProducts(this.state.currentPage, this.state.record, this.state.search);
            } );
        }, 300);

        if(rolePermission) {
            rolePermission = rolePermission.access.product.product;
            if(rolePermission.read) {
                content = (
                    <div className="myProfile">
                        <ReUseTitle
                            title={<FormattedMessage id='ManageProducts' defaultMessage='Manage Products'/> }
                            subtitle={<FormattedMessage id='ManageProductsDescription' defaultMessage='dd new products and manage existing ones.'/>}
                            buttonText={<FormattedMessage id='AddNewProduct' defaultMessage='Add new products'/>}
                            linkaddress='/product/new'
                            buttonDisabled={rolePermission.create}
                        />
                        <SearchBar onSearchTermChange={termSearch}/>
                        <div className="myCard">
                        <Loading style={this.state.loading? 'block' : 'none'}/>
                        <Card className="dashBoardCard clearfix" style={{display: this.state.loading? 'none' : 'block'}}>
                            <CardTitle
                                title={<FormattedMessage id='ManageProductsTable' defaultMessage='Manage Products'/>}
                                titleStyle={{ fontWeight: 'bold' }}/>
                            <ListTable 
                                headerList={headerList}
                                tableData={this.state.tableData}
                                permission={rolePermission}/>
                            <Divider />
                            <PaginationBar
                                currentPage={this.state.currentPage}
                                total={this.state.total}
                                display={4}
                                onPageToCurrent={this.pageToCurrent} 
                            />
                        </Card>
                        </div>
                    </div>
                );
            }
            else {
                content = (
                    <div className="myProfile">
                      <ReUseTitle
                        title={<FormattedMessage id='ManageProducts' defaultMessage='Manage Products'/> }
                        subtitle={<FormattedMessage id='ManageProductsDescription' defaultMessage='dd new products and manage existing ones.'/>}
                        buttonText={<FormattedMessage id='AddNewProduct' defaultMessage='Add new products'/>}
                        linkaddress='/product/new'
                        buttonDisabled={rolePermission.create}/>
                      <div className="myCard">
                        <NoPermission/>
                      </div>
                    </div>
                  );
            }
        }
        else content = <NoAccess />

        return content;
    }

    pageToCurrent = (currentPage) => {
        this.setState( {currentPage} );
        this.getProducts(currentPage, this.state.record, this.state.search);
    }

    getProducts(page, record, search) {
        this.setState( { loading: true } );

        this.props.findAllProducts({page, record, search})
        .then( (res) => {
            const payload = res.payload ? res.payload : null;
            if(payload && payload.status === 200) {
                const tableData = payload.data.data;
                const total = Math.ceil(payload.data.total/record);
                this.setState({ tableData, total })
            }
            this.setState({ loading: false });
        });
    }
}

export default connect(
    null,
    dispatch => bindActionCreators({ findAllProducts }, dispatch)
)(ManageRecall);