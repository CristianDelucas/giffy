import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'

const ListOfGifs = ({params}) =>{
    const [gifs, setGifs] = useState({loading:false, results: []});
    const {keyword} = params;

    useEffect(function(){
        setGifs((actualGifs)=> ({loading:true,results: actualGifs.results}));
        getGifs({keyword})
        .then(
            gifs => {
                setGifs({loading:false,results: gifs});
            }
        )
    },[keyword]);
    
    if(gifs.loading) return <i>Loading...</i>

    return(
        <div>
            {gifs.results.map(singleGif => 
                <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url} id={singleGif.id}/>
            )}
        </div>
    )
}

export default ListOfGifs