
import Spinner from 'components/Spinner';
import useNearScreen from 'hooks/useNearScreen';
import React,{Suspense} from 'react'


//el componente TrendingSearches se cargara de forma lazy (solo cuando lo necesitemos)

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

//lazyTrending evita que el componente se cargue si no se está viendo en la página
export default function LazyTrending(){
    
    
    const {isNearScreen,fromRef} = useNearScreen({distance:'200px'});
    
    return <div ref={fromRef}>
    <Suspense fallback={<Spinner/>}>
        {isNearScreen ? <TrendingSearches/> : <Spinner/>}
        </Suspense>
    </div>
}