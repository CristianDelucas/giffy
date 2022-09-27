import Category from "components/Category";
import { useState } from "react";
import { useEffect } from "react";
import getTrendingTerms from "services/getTrendingTermsService";

export default function TrendingSearches () {
    const [trends,setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends);
    },[])

    return <Category name={'Tendencias'} options={trends} />
}