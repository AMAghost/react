import './Footer.css';
import logo from '../../img/logo_negate.png'

function Footer() {
    return (
        <section className='footer'>
            <div className="footer_logo">
                <img className='footer-img-logo' src={logo} alt="logo" />
                <p className="footer-text-logo">SAFQ</p>
            </div>
            <div className="footer_nav">
                <a href="" className="footer-link">Главная</a>
                <a href="" className="footer-link">Каталог</a>
                <a href="" className="footer-link">О нас</a>
                <a href="" className="footer-link">Поддержка</a>
            </div>
        </section>
    )
};

export default Footer;