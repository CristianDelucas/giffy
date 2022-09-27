
import './App.css';
import React from 'react';

import {Link, Route} from 'wouter';

import SearchResults from './@pages/SearchResults';
import Home from './@pages/Home';
import Detail from './@pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';



function App() {

  return (
    <StaticContext.Provider value={{
      name:'con-provider',
      suscribeteAlCanal:true
  }}>
    <div className="App">
      <section className="App-content">
      <Link to="/">
      <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
      </figure>
      </Link>
      <GifsContextProvider>
        <Route 
          path='/' 
          component={Home}
        />
        <Route 
          path='/search/:keyword' 
          component={SearchResults}
        />
        <Route 
          path='/gif/:id' 
          component={Detail}
        />
      </GifsContextProvider>
      
      
      </section>
      
    </div>
    </StaticContext.Provider>
  );
}

export default App;
