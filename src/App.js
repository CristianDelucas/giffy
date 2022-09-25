
import './App.css';
import React, {useState} from 'react';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter';



function App() {

  return (
    <div className="App">
    
      <section className="App-content">
      <h1>App</h1>
      <Link to='/gif/colombia'>Colombia</Link>
      <Link to='/gif/mexico'>Mexico</Link>
      <Route path='/gif/:keyword' component={ListOfGifs}/>
      
      
      
      </section>
      
    </div>
  );
}

export default App;
