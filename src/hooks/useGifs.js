import { useContext, useEffect, useState } from "react";
import GifsContext from "context/GifsContext";
import getGifs from "services/getGifs";

const INITIAL_PAGE=0;


export function useGifs({keyword}={keyword:null}){
    const [loading,setLoading] = useState(false);
    const [loadingNextPage,setLoadingNextPage] = useState(false);
    const [page,setPage] = useState(0);
    const {gifs,setGifs} = useContext(GifsContext)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'goku';

    //useEffects
    useEffect(function(){

        setLoading(true);

        

        getGifs({keyword: keywordToUse})
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false);
            if(keyword) localStorage.setItem('lastKeyword',keyword);
        })
    },[keyword,keywordToUse,setGifs])


    useEffect(function (){
        if(page ===INITIAL_PAGE) return
        setLoadingNextPage(true)
            getGifs({keyword: keywordToUse,page})
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false)
            });
        
    },[page,keywordToUse,setGifs])

    return {loading,loadingNextPage,gifs,setPage};
}

