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

   

    return ( 
        <div className="product-list">
            {products.map((product : product)=> (
                <div className="product-preview" key={product.id}>
                    <img src={product.img} alt="" />
                    <h4> {product.title}</h4>
                     <p> {product.price} RSD </p>
                     <button> Kupi </button>
                </div>
            ))}
            
        </div>

     );
}
 
export default MarketLists;