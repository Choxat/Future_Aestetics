import { useParams, useSearchParams } from 'react-router-dom';
import '../../styles/Market/Market.scss'

type product ={
    map(arg0: (product: product) => JSX.Element): import("react").ReactNode;
    id: number,
    title: string,
    price: number,
    img: string,
    category: string
}

const MarketLists = ({ products} : { products: product} )  => {

   const [ query, setQuery] = useSearchParams();

   const debil = query.get('query');
   
    return ( 
        <div className="product-list">
            {products
            .map((product : product)=> (
                <div className="product-preview" key={product.id}>
                    <img src={product.img} alt="" />
                    <h4> {product.title}</h4>
                     <p> {product.price} RSD </p>
                     <button> Kupi </button>
                    {debil && <h2> ovo je {debil}</h2>}
                </div>
            ))}
           
        </div>

     );
}
 
export default MarketLists;