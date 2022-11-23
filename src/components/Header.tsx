import '../styles/Header.scss'
import  { AiFillInstagram as IgIcon,AiFillFacebook as FbIcon,AiFillYoutube as YtIcon,
    AiOutlineMenu as MenuIcon,AiOutlineSearch as SearchIcon, AiOutlineShoppingCart as ShopIcon  }  from "react-icons/ai";
import { Link } from 'react-router-dom';




const header = () => {
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
        <ul>
            <li className='menu'><a href='#'><MenuIcon/></a></li>
            <li className='search'><a href='#'><SearchIcon/></a></li>
            <li className="cart"><a href='#'><ShopIcon/></a></li>
        </ul>
    </nav>

    </header>
    
    );
}
 
export default header;