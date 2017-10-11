import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findAllProducts } from '../../actions/index';

import { FormattedMessage } from 'react-intl';

import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import RecallProducts from './components/recall_products';
import Loading from '../../components/Loading';

class ViewRecall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            loading: true
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        const page = '1';
        const record = '6';
        const search = '';
        this.props.findAllProducts({page, record, search})
        .then( (res) => {
            const payload = res.payload ? res.payload : null;
            if(payload && payload.status === 200) {
                const tableData = payload.data.data;
                this.setState({ tableData })
            }
            this.setState({ loading: false });
        });
    }

    render() {
        const recallName = 'Mercedes-Benz Australia/Pacific Pty Ltd — Mercedes-Benz "C", "S" and "GLC" Class Passenger Cars'
        const recallsubTitle = 'Date published: 5 Oct 2017'
        const headerList = ['image','name','description','affected numbers'];

        return (
            <div className='myProfile'>
                <div className='myCard'>
                <Card>
                    <CardHeader 
                        style={this.headerStyle}
                        titleStyle={this.headerTitleStyle}
                        title={recallName}
                        subtitle={recallsubTitle}
                    />
                    <CardTitle title="Products Lists" />
                        <Loading style={this.state.loading? 'block' : 'none'}/>
                        <div style={{width: '95%', marginLeft: 'auto', marginRight: 'auto' ,display: this.state.loading? 'none' : 'block'}}>
                            <RecallProducts 
                                headerList={headerList}
                                tableData={this.state.tableData}
                            />
                        </div>
                    <Divider style={this.dividerStyle}/>
                    <CardTitle style={this.cardTitleStyle} title="Identifying features" />
                    <CardText style={this.cardTextStyle}>  
                        <h2>What are the defects: </h2>
                        The engine of affected vehicles may turn off when braking at a low speed (e.g. when braking for a traffic light).
                        
                        Also, after an ECO start, the engine may turn off again if the vehicle is accelerated slowly under a high load..
                    </CardText>
                    <CardText style={this.cardTextStyle}>  
                        <h2>What are the hazards: </h2>
                        The front passenger seat belt tensioner may not deploy. This may increase the risk of injury to the passenger if the vehicle is involved in an accident.
                    </CardText>
                    <Divider style={this.dividerStyle}/>
                        {this.getDetailsList()}
                    <Divider style={this.dividerStyle}/>
                    <div style={this.buttonGroupStyle} className="profileButton">
                        <FlatButton className="cancel" label={<FormattedMessage id='Cancel' defaultMessage='Cancel'/>} onClick={this.context.router.history.goBack}/>
                        <FlatButton className="add" label={<FormattedMessage id='Add' defaultMessage='Add'/>} />
                    </div>
                </Card>
                </div>
            </div>
        );
    }

    getDetailsList() {
        let content = [];
        content = (
            <div style={this.detailList}>
                <div className='clearfix' style={this.detailRow}>
                    <div style={this.detailLeft}>Affected company</div>
                    <div style={this.detailRight}>
                        <div>Mercedes-Benz Australia/Pacific Pty Ltd</div>
                        <div>Mercedes-Benz </div>
                    </div>
                </div>
                <div className='clearfix' style={this.detailRow}>
                    <div style={this.detailLeft}>Traders who sold this product</div>
                    <div style={this.detailRight}>
                        <div>Authorised Mercedes-Benz Dealers</div>
                    </div>
                </div>
                <div className='clearfix' style={this.detailRow}>
                    <div style={this.detailLeft}>Where the product was sold</div>
                    <div style={this.detailRight}>
                        <div>Nationally</div>
                        <div>Overseas</div>
                    </div>
                </div>
            </div>
        );
        return content;
    }

    headerStyle = {
        marginTop: '30px'
    }
    headerTitleStyle = {
        fontSize: '30px',
        marginBottom: '10px'
    }
    dividerStyle = {
        width: '80%'
    }
    cardTitleStyle = {
        paddingBottom: '0'
    }
    cardTextStyle = {
        fontSize: '16px'
    }
    detailList = {
        padding: '16px'
    }
    detailRow = {
        margin: '10px 0'
    }
    detailLeft = {
        float: 'left',
        width: '33.33333%',
        fontSize: '17px',
        fontWeight: 'bold'
    }
    detailRight = {
        float: 'left',
        width: '66.66666%'
    }
    buttonGroupStyle = {
        padding: '16px 0'
    }
}

export default connect(
    null,
    dispatch => bindActionCreators({ findAllProducts }, dispatch)
)(ViewRecall);