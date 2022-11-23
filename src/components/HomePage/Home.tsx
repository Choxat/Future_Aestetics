import Blog from './Blog';
import  Carousel  from './Carousel'
import Category from './Category';


const Home = () => {
    return ( 
        <main>
            <Carousel/>
            <Blog/>
            <Category/>
        </main>
     );
}
 
export default Home;