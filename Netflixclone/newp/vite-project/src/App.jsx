import React from 'react'
import MyApp from './MyApp'
import './App.css' 
function App() {
  
  // Try changing to isLoggedIn={true}:

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );


  
  return (
    <>
    <h4>{console.log(  products)}</h4>
    <h3>{console.log( listItems)}</h3>
    <h3>welcome to reach js</h3>
    <Greeting isLoggedIn={false} />

    <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>   
    <MyApp/>
    <ul>{listItems}</ul>
 
  
    </>
  )
  function UserGreeting(props) {
    return (
     <h1>welcome back</h1>
    )
 }
 
 function GuestGreeting(props) {
     return (
         <h1>Please Sign Up</h1>
     )
 }

 function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  
  if (isLoggedIn) {
    return <UserGreeting/>
  }
  return <GuestGreeting/>
 }

}

export default App