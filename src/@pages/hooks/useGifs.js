import { useContext, useEffect, useState } from "react";
import GifsContext from "../../context/GifsContext";
import getGifs from "../../services/getGifs";



export function useGifs({keyword}={keyword:null}){
    const [loading,setLoading] = useState(false);
    const {gifs,setGifs} = useContext(GifsContext)

    //useEffects
    useEffect(function(){

        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'goku';

        getGifs({keyword: keywordToUse})
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false);
            if(keyword) localStorage.setItem('lastKeyword',keyword);
        })
    },[keyword])

    return {loading,gifs};
}

