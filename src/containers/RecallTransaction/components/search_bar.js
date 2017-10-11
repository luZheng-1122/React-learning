import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormattedMessage } from 'react-intl';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <TextField 
                floatingLabelText={<FormattedMessage id='Search' defaultMessage='Search By...'/>}
                floatingLabelStyle={{ color: 'green' }}
                floatingLabelFocusStyle={{ color: 'green' }}
                underlineFocusStyle={{ color: 'grey' }}
                value = {this.state.term}
                onChange = {this.onInputChange}
            ></TextField>
        );
    }

    onInputChange(event) {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

SearchBar.propTypes = {
    onSearchTermChange: PropTypes.func.isRequired
  };

export default SearchBar;