import React from 'react';
import Gif from '../../components/Gif/Gif';
import useGlobalGifs from '../hooks/useGlobalGifs';
const Detail = ({params})=>{

    
    const gifs = useGlobalGifs();

    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
        )
    const {title,id,url} = gif

    return(
        <Gif 
        id={id}
        title={title}
        url={url}
         />
    )
}

export default Detail