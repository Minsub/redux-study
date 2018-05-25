import React, { Component } from 'react';
import Counter from './Counter'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Post />
      </div>
    );
  }
}

export default App;
