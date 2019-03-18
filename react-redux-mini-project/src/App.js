import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsForm />
        <Posts />
      </div>
    );
  }
}

export default App;
