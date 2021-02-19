import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserHeader extends Component {

    render() {
        if (!this.props.user)
            return null;
        return (<div className="header">
            {this.props.user.username}
        </div>
        );
    }

}
const mapToProps = (state, ownprops) => {
    const user = state.user.find(user => user.id == ownprops.userId)
    return {
        user: user
    };
}

export default connect(mapToProps)(UserHeader);