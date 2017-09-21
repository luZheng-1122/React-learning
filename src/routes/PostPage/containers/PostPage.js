import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pad } from '../../../lib/util';
import { getArticle } from '../../../actions';
import less from './PostPage.less';
import CoverHead from '../../../components/CoverHead/CoverHead';

class PostPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const path = this.getCurrentDataUrl();
        this.props.getArticle(path);
    }

    getCurrentDataUrl =() => {
        const {
          year,
          month,
          day,
          name
        } = this.props.match.params;
        const path = [parseInt(year), parseInt(month), parseInt(day), name]
                        .map((item) => typeof item === 'number' ? pad(item, 2) : item).join('/');
        return 'posts/' + path + '.json';
      }

    getData = () => {
        let result = [];

        if(this.props.article) {
            result = (
                <div>
                    <CoverHead picture={this.props.article.img}/>
                    <div id="PostPage">
                        <div className="content" dangerouslySetInnerHTML={{__html: this.props.article.content}}></div>
                    </div>
                </div>
            );
        }
        
        return result;
    }

    render()  {
        return (
            <div>
                {this.getData()}
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        article: state.list
    };
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({ getArticle }, dispatch)
)(PostPage);