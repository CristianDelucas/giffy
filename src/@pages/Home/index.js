import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link, useLocation} from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import getGifs from '../../services/getGifs';
import { useGifs } from '../hooks/useGifs';

const POPULAR_GIFS = ['Matrix','Colombia','Ecuador','España']

const Home = ()=>{
const [keyword,setKeyword] = useState('');
const [path,pushLocation] = useLocation();





const handleSubmit = (e)=>{
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
}

const handleChange = (e) =>{
    setKeyword(e.target.value);
}

const {loading,gifs} = useGifs();

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type={'text'} value={keyword} placeholder='Busque el gif deseado'/>
                <input type={'submit'} value='BUSCAR'/>
            </form>
            <h3 className='App-title'>Última busqueda</h3>
            <ListOfGifs gifs={gifs}/>

            <h3 className='App-title'>Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li>
                    <Link to={`/gif/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home