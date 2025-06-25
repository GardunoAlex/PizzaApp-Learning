
import './App.css';
import React from 'react';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Footer />
      
    </div>
  );
}

function Header(){
  return (
    // showing how the css works in the jsx. Can't use "class" like in html, have to use "className".
  <h1 className='word'>Fast React Pizza Go</h1>);
}

function Menu(){
  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza 
    name="pizzaOne"
    ingredients="tomate"
    price="10"
    /> 
    <Pizza 
    name="pizzaTwo"
    ingredients="tomate"
    price="10"
    /> 
    <Pizza 
    name="pizzaThree"
    ingredients="tomate"
    price="10"
    /> 

      

    </main>
    /* <Pizza 
    name-"..."
    ingredients="..."
    price="..."
    /> 
    
    now this goes into the compoenent through props -- props is just short for properties. 
    The order of the props being sent in doens't matter, 
    I would assume this means that only the nameing convention matters. 
    */
  );
}

function Footer(){

  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;

  /* if (hour >= openHour && hour <= closeHour){
    alert("We're currenlty open");
  } else {
    alert("sorry we're closed");
  } */

  // -> this was just an example. Can we use functions inside of the return statement in the JSX?



  return (
    <footer className='footer'> {new Date().toLocaleTimeString()}; We're Currently Open! </footer>
  );
}

// how to props work, passed in from the parent -- the component in the main function.
function Pizza(props){

  // imagine theres a props in the argument section. Pizza(props)
  /* 
  return({
    <div> 
      <img src={props.photoName} />
      <h3>{props.name}</h3>
      etc...
    </div> 
  });

  -> you have to use curely brackets because that's how you access the variable being sent in from the
  */
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.ingredients} </h2>
      <h3> {props.price} </h3>
    </div>
  
);
}

export default App;
