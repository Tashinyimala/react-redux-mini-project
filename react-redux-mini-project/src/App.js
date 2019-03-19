import React, { Component } from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux'; 
import store from './store';

import Posts from './components/Posts';
import PostsForm from './components/PostForm';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <PostsForm />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
