import React, { Component } from 'react';
import image from '../assets/images/image.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 'State',
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <img src={image} alt="app-logo" width="100" height="100" />
        </div>
        <h1>Webpack Starter App</h1>
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
