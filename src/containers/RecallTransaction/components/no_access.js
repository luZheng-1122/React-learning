
import React, {Component} from 'react';

export default class NoAccess extends Component {
    render() {
        return (
            <div className="myProfile">
                <div className="myCard">
                <div style={{height: '400px'}}>
                    <h2>
                        Can not access your role specification!
                    </h2>
                </div>
                </div>
            </div>
        );
    }
}