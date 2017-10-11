import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Pagination from 'material-ui-pagination';

class PaginationBar extends Component {
    constructor(props) {
        super(props);

        this.onSelectedChange = this.onSelectedChange.bind(this);
    }

    render() {
        return (
            <div style={this.centerPagination}>
                <div style = {this.paginationStyle}>
                <Pagination
                    total = {this.props.total}
                    current = {this.props.currentPage}
                    display = {this.props.display}
                    onChange = {this.onSelectedChange}
                />
                </div>
            </div>
        );
    }

    onSelectedChange(currentPage) {
        this.props.onPageToCurrent(currentPage);
    }

    centerPagination = {
        float : 'left',
        position: 'relative',
        left : '50%'
    }

    paginationStyle = {
        position: 'relative',
        left: '-50%',
    }
}

PaginationBar.propTypes = {
    currentPage : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    display : PropTypes.number.isRequired,
    onPageToCurrent : PropTypes.func.isRequired
}

export default PaginationBar;