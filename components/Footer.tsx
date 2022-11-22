import '../styles/Footer.scss'

const Footer = () => {
    return ( 
        <footer className='footerbot'>
            <section className="navig">
                <ul>    
                    <h3> Navigacija</h3>
                    <li>Home</li>
                    <li>Kontakt</li>
                    <li>Proizvodi</li>
                </ul>
            </section>  

            <section className="connect">
                <ul>    
                    <h3> Poveži se </h3>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </section>

        </footer>
     );
}
 
export default Footer;