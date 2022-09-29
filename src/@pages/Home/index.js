import React, { useCallback, useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";
import SearchForm from "components/SearchForm";
import {Helmet} from 'react-helmet';

const Home = () => {
  
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`);
  },[pushLocation])

  

  const {  gifs } = useGifs();

  return (
    <>
    <Helmet>
        <title>Home || Giffy</title>
        <link rel="canonical" href="https://lapaginadeproduccion.com"/>
      </Helmet>
    <SearchForm onSubmit={handleSubmit}/>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches/>
        </div>
      </div>
    </>
  );
};

export default Home;
