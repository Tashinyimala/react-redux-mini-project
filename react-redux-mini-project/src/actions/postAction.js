import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
}

export const createPost = (postData) => dispatch => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));

}
