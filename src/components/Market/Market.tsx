import { useEffect, useState } from 'react';
import useFetch from '../../scripts/useFetch';
import '../../styles/Market/Market.scss'
import MarketLists from './MarketList';




const Market = () => {
    
    const {data: products , isLoading, error} = useFetch(' http://localhost:8000/products');
   


    type product ={
        id: number,
        title: string,
        price: number,
        img: string,
        category: string
    }
    
    return ( 
    <article>
            
            { error && <div> { error }</div>}
            { isLoading && <div>loading...</div>}
            { products && <MarketLists products={ products } />}
       
    </article> 
    );
}
 
export default Market;