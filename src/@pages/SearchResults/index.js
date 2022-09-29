import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword } = params;

  const { loading, gifs, setPage } = useGifs({ keyword });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  

  //const handleNextPage = ()=> setPage(prevPage => prevPage +1);
  //const handleNextPage = ()=> console.log('Next page -->');

  const debounceHandleNextPage = useCallback(debounce(
      () => setPage(prevPage => prevPage +1), 200)
  , [setPage]);

  const title= gifs ? `${gifs.length} Resultados de ${decodeURI(keyword)}`: ''
  //useSEO({title,updated:Boolean(params.keyword)})
  
  useEffect(function () {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
  },[debounceHandleNextPage,isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
              <title>{title} || Giffy</title>
              <meta name="description" content={title}></meta>
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div ref={externalRef} id="visor"></div>
        </>
      )}
      {/* <br/>
      <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
};

export default SearchResults;
