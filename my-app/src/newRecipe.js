import App from './App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import './custom.scss';

function newRecipe() {
  return (
    <div className="App">
      <header >
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, add your new recipe here:</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </header>
        <main>
        
          <div className="Recipe">
            <Form>
            {/* RecipeName */}
            <Form.Group controlId="addRecipeName">
              <Form.Row>
                <Col sm="3">
                  <Form.Label>Recipe Name:</Form.Label>
                </Col>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Recipe Name" />
                </Col>
              </Form.Row>
            </Form.Group>

            {/* Ingredients: variable inputs 
            <Ingredient Name> <Amount>
            <Add another Ingredient Button>
            */}
            <Form.Group controlId="addRecipeIngredients">
              <Form.Row>
                <Col sm="3">
                  <Form.Label>Ingredients:</Form.Label>
                </Col>
                <Col sm="6">
                  <Form.Control type="text" placeholder="Enter Ingredient Name" />
                </Col>
                <Col sm="3">
                  <Form.Control type="text" placeholder="Enter Amount" />
                </Col>
                </Form.Row>
                <Form.Row>
                  {'\n '}
                  <Button variant="outline-dark" size= "sm" className="addButton" >
                    + Add another Ingredient
                  </Button>
              </Form.Row>
            </Form.Group>

            {/* Preparation: variable inputs
            <Numbered step>
            <Add another step Button>
            */}
            <Form.Group controlId="addRecipePrep">
              <Form.Row>
                <Col sm="3">
                  <Form.Label>Preparation:</Form.Label>
                </Col>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Step 1" />
                </Col>
                </Form.Row>

                <Form.Row>
                <Button variant="outline-dark" size= "sm" className="addButton">
                  + Add another Step
                </Button>
              </Form.Row>
            </Form.Group>

            {/* Recipe Notes*/}
            <Form.Group controlId="addRecipeNotes">
              <Form.Row>
                <Col sm="3"> 
                  <Form.Label>Recipe Notes</Form.Label>
                </Col>
                <Col sm="9">
                  <Form.Control as="textarea" rows={3} placeholder="Chef's tips..."/>`
                </Col>
              </Form.Row>
            </Form.Group>
            

            {/* TODO: Recipe Tags */}

            {/* Add Recipe Button */}
            <Button variant="dark" type="submit">
              Add My Recipe
            </Button>
          </Form>

          </div>
          
        
        </main> 
    </div>
  );
}

export default newRecipe;
