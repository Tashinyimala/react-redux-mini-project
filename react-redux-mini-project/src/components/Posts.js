import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import PropTypes from 'prop-types';

export class Posts extends Component {
    componentDidMount = () => {
      this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nextProps) {
        this.props.posts.unshift(nextProps.newPost);
    }

    renderPosts() {
        return this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>)
        );
    }

    render() {
        return (
        <div>
            <h1>Posts</h1>
            { this.renderPosts() }
        </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
