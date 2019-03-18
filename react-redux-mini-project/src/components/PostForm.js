import React, { Component } from 'react'

export class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: "",
        body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const title = event.target.name;
    const newTitle = event.target.value;
    this.setState({[title]: newTitle});
  }

  onSubmit(event) {
    event.preventDefault();
    
    const post = {
        title: this.state.title,
        body: this.state.body
    }

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label><br />
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/> 
            </div> 
            
            <br />
            <div>
                <label>Body: </label><br />
                <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
            </div>

            <br /> 
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
