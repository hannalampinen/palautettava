import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

// https://www.thecocktaildb.com/api/json/v1/1/random.php

function App() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  const [name, setName] = useState('');
  const [glass, setGlass] = useState('');
  const [instructions, setInstructions] = useState(''); 

  const [ingredients1, setIngredients1] = useState('');
  const [ingredients2, setIngredients2] = useState('');
  const [ingredients3, setIngredients3] = useState('');
  const [ingredients4, setIngredients4] = useState('');
  const [ingredients5, setIngredients5] = useState('');
  const [ingredients6, setIngredients6] = useState('');
  const [ingredients7, setIngredients7] = useState('');
  const [ingredients8, setIngredients8] = useState('');
  const [ingredients9, setIngredients9] = useState('');
  const [ingredients10, setIngredients10] = useState('');
  const [ingredients11, setIngredients11] = useState('');
  const [ingredients12, setIngredients12] = useState('');
  const [ingredients13, setIngredients13] = useState('');
  const [ingredients14, setIngredients14] = useState('');
  const [ingredients15, setIngredients15] = useState('');

  const [measure1, setMeasure1] = useState('');
  const [measure2, setMeasure2] = useState('');
  const [measure3, setMeasure3] = useState('');
  const [measure4, setMeasure4] = useState('');
  const [measure5, setMeasure5] = useState('');
  const [measure6, setMeasure6] = useState('');
  const [measure7, setMeasure7] = useState('');
  const [measure8, setMeasure8] = useState('');
  const [measure9, setMeasure9] = useState('');
  const [measure10, setMeasure10] = useState('');
  const [measure11, setMeasure11] = useState('');
  const [measure12, setMeasure12] = useState('');
  const [measure13, setMeasure13] = useState('');
  const [measure14, setMeasure14] = useState('');
  const [measure15, setMeasure15] = useState('');
 

  useEffect(() => {
    async function getDrink() {
      try {
        const response = await fetch (URL);
        if (response.ok) {
          let i = 2;
          const json = await response.json();
          const drink = json.drinks[0];
          setName(drink.strDrink);
          setGlass(drink.strGlass);
          setInstructions(drink.strInstructions);
         
          setIngredients1(drink.strIngredient1);
          setIngredients2(drink.strIngredient2);
          setIngredients3(drink.strIngredient3);
          setIngredients4(drink.strIngredient4);
          setIngredients5(drink.strIngredient5);
          setIngredients6(drink.strIngredient6);
          setIngredients7(drink.strIngredient7);
          setIngredients8(drink.strIngredient8);
          setIngredients9(drink.strIngredient9);
          setIngredients10(drink.strIngredient10);
          setIngredients11(drink.strIngredient11);
          setIngredients12(drink.strIngredient12);
          setIngredients13(drink.strIngredient13);
          setIngredients14(drink.strIngredient14);
          setIngredients15(drink.strIngredient15);

          setMeasure1(drink.strMeasure1);
          setMeasure2(drink.strMeasure2);
          setMeasure3(drink.strMeasure3);
          setMeasure4(drink.strMeasure4);
          setMeasure5(drink.strMeasure5);
          setMeasure6(drink.strMeasure6);
          setMeasure7(drink.strMeasure7);
          setMeasure8(drink.strMeasure8);
          setMeasure9(drink.strMeasure9);
          setMeasure10(drink.strMeasure10);
          setMeasure11(drink.strMeasure11);
          setMeasure12(drink.strMeasure12);
          setMeasure13(drink.strMeasure13);
          setMeasure14(drink.strMeasure14);
          setMeasure15(drink.strMeasure15);
    
        } else {
          alert('No drinking tonight')
        }
      } catch (err) {
        alert(err);
      }
    }
    getDrink();
  }, []) 

  return (
    <div id='container'>
      <div>
        <h1>Your cocktail of the day is...</h1>
        <h2>{name}</h2>
        <h3>Glass</h3>
        <p>{glass}</p>
        <h3>Ingredients</h3>
        <p>{ingredients1} {measure1}</p>
        <p>{ingredients2} {measure2}</p>
        <p>{ingredients3} {measure3}</p>
        <p>{ingredients4} {measure4}</p>
        <p>{ingredients5} {measure5}</p>
        <p>{ingredients6} {measure6}</p>
        <p>{ingredients7} {measure7}</p>
        <p>{ingredients8} {measure8}</p>
        <p>{ingredients9} {measure9}</p>
        <p>{ingredients10} {measure10}</p>
        <p>{ingredients11} {measure11}</p>
        <p>{ingredients12} {measure12}</p>
        <p>{ingredients13} {measure13}</p>
        <p>{ingredients14} {measure14}</p>
        <p>{ingredients15} {measure15}</p>
        <h3>Instructions</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default App;
