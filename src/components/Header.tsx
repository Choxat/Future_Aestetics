import '../styles/Header.scss'
import  { AiFillInstagram as IgIcon,AiFillFacebook as FbIcon,AiFillYoutube as YtIcon,
    AiOutlineMenu as MenuIcon,AiOutlineSearch as SearchIcon, AiOutlineShoppingCart as ShopIcon  }  from "react-icons/ai";
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';





   

const header = () => {

   

    const [openMenu, setOpenMenu] = useState(true);
    const [openCart, setOpenCart] = useState(true);
    const [openSearch, setOpenSearch] = useState(true);
   
    let [query,setQuery] = useSearchParams();


   console.log(query.values);
    
    return ( 
        
    <header role='banner'> 
       
        <section id='banner' >
            <div className="notification"> Future Aesthetics</div>
            <div className='media'> <IgIcon/> </div>
            <div className='media'> <FbIcon/> </div>
            <div className='media'> <YtIcon/> </div>
        </section>

        <nav className='navigation'>
            <Link to='/' className='logo'>
                <h2>L O G O</h2>
            </Link>      
            <ul id='sticky-nav'>
                <li className='ham-menu' onClick={() => setOpenMenu(!openMenu)}>   <MenuIcon/></li>
                <input type="search" onChange={e => setQuery({query : e.target.value})}  className={openSearch ? "search-input" : "srach-input-open"  }></input> 
                <Link to='market'><li className='search' onClick={() => setOpenSearch(!openSearch)}> <SearchIcon/> </li></Link>
                <li className="shop-menu" onClick={() => setOpenCart(!openCart)}><ShopIcon/></li>
            </ul>
        </nav>


 {/* ------------------------ On Cick Menu's ------------------------------------------------- */}
        <aside className={openMenu ? "hamburger" : "hamburger-open"} >
            <ul>
                <h3>Navigacija</h3>
                <li>Početna</li>
                <li>Blog</li>
                <li>Prodavnica</li>
            </ul>
        </aside>  
        <aside className={openCart ? "shop-cart" : "shop-cart-open"} >
            <h3>shopping cart</h3>
            <h4> added # items</h4>

        </aside>  

     
       

    </header>
           

    );
   
   
}
 

export default header;