
import './App.css';
import React, { Suspense } from 'react';

import {Link, Route} from 'wouter';

import SearchResults from './@pages/SearchResults';

import Detail from './@pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import Spinner from 'components/Spinner';

const Home = React.lazy(() => import('./@pages/Home'));


function App() {

  return (
    <StaticContext.Provider value={{
      name:'con-provider',
      suscribeteAlCanal:true
  }}>
  
    <div className="App">
    <Suspense fallback={Spinner}>
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
        <Route 
          path='/404' 
          component={()=><h1 >ERROR: 404</h1>}
        />
      </GifsContextProvider>
      
      
      </section>
      </Suspense>
      
    </div>
    </StaticContext.Provider>
  );
}

export default App;
