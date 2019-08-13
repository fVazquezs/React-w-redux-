import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

class UserHeader extends React.Component {
    render() {
        if (!this.props.user) {
            return null;
        }
        return <div className='header'>{this.props.user.name}</div>
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    const user = users.find((user) => ownProps.userId === user.id)
    return { user };
};


export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);