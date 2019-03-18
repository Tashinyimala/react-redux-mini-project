import React, { Component } from 'react'

export class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({posts: data}));
    };

    renderPosts() {
        return this.state.posts.map(post => (
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

export default Posts;
