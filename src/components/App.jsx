import React, { Component } from 'react';

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
        <h1>Webpack Starter App</h1>
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
