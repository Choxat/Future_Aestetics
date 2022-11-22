import '../styles/header.scss'

const header = () => {
    return ( 
    
    <header role='banner'> 

    <section id='banner' >
    <div className="notification"> Future Aesthetics</div>
    <div className='media'>IG</div>
    <div className='media'>FB</div>
    <div className='media'>YT</div>
    </section>

    <nav className='navigation'>
        <div id='logo'>
            <img alt='logo'/>
        </div>
        <ul>
            <li className='menu'><a href='#'>MN</a></li>
            <li className='search'><a href='#'>SR</a></li>
            <li className="cart"><a href='#'>CA</a></li>
        </ul>
    </nav>

    </header>
    
    );
}
 
export default header;