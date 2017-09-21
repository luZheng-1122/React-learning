import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CoverHead from '../../../components/CoverHead/CoverHead';
import ListItems from '../components/ListItems/ListItems';
import AuthorProfile from '../components/AuthorProfile/AuthorProfile';
import Loading from '../../../lib/Loading';
// import homeCover from '/public/source/img/blogCover.png';

import { getList, getConfig } from '../../../actions';

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            data: null
        };
    }

    componentWillMount() {
        this.props.getList();
        this.props.getConfig();
    }

    render()  {
        let content = [];
        const homeCover = '/public/source/img/1.jpg';
        // console.log(this.props.config);
        //到底要如何写此处的判断能绝对安全？
        if(this.props.list.posts && this.props.config.global) {    
            content = (
                <div id="ListBody">
                    <ListItems list = {this.props.list}/>
                    <AuthorProfile config = {this.props.config}/> 
                </div>
            );
        }
        else {
            content = (< Loading />);
        }

        return (
            <div id="ListPage">
                <div id="ListHead">
                    <CoverHead picture = {homeCover} />
                </div>
                {content}              
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        list: state.list,
        config: state.config
     };
}

export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({ getList, getConfig }, dispatch)
)(ListPage);