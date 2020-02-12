import React from 'react';
import image from '../assets/images/icon-square-big';

function App() {
  return (
    <div className="App">
      <div className="App__top-menu">
        <img src={image} alt="app-logo" width="100" height="100" />
      </div>
      <div className="App__main-content">
        <h1>Webpack Starter App</h1>
        <h2>React, Sass, Redux</h2>
      </div>
    </div>
  );
}

export default App;
