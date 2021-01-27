import App from './App';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import './custom.scss';

function newRecipe() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, add your new recipe here:</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </header>
        <body>
        <Button href="newRecipe.js" size="lg"  variant="outline-secondary">ADD RECIPE</Button>
        
        </body>
    </div>
  );
}

export default newRecipe;
