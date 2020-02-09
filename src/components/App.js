import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
        <div className="App">
            <h1>Webpack Starter App</h1>
        </div>
    );
  }
}

export default App;