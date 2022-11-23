import { Link } from 'react-router-dom';
import '../../styles/HomePage/Carousel.scss'

const Carousel = () => {
    return ( 
    <article className='Carousel'>
        <img src="" alt="carousel img" />
        <p>by Future Aesthetics</p>
        <Link to="/market" className='link-car'><button>Shop Now</button></Link>
        <div className="loading">sss</div>
    </article>
    );
}
 
export default Carousel;