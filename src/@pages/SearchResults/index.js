import React, { useEffect } from 'react';
import { useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner';
import getGifs from '../../services/getGifs';
import { useGifs } from '../hooks/useGifs';


const SearchResults = ({params}) =>{
    const {keyword} = params;
    
    const {loading,gifs} = useGifs({keyword});
    
    

    return <>
            {loading? <Spinner/>:
            <ListOfGifs gifs={gifs}/>
            }
        </>
    
}

export default SearchResults
