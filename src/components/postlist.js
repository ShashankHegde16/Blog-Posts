import React, { Component } from 'react';
import { fetchPostsAndUsers } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './userheader'


class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }


    renderList() {
        let posts = this.props.posts;
        posts = posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>
                                {post.title}
                            </h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        })
        return posts;
    }
    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };

}
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);

