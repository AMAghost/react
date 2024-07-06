import './Header.css'
import logo from '../../img/logo.png'

function Header() {
    return (
        <section className='header'>
            <div className="header_logo">
                <img className='header-img-logo' src={logo} alt="logo" />
                <p className="header-text-logo">SAFQ</p>
            </div>
            <div className="header_nav">
                <a href="" className="header-link">Главная</a>
                <a href="" className="header-link">Каталог</a>
                <a href="" className="header-link">О нас</a>
                <a href="" className="header-link">Поддержка</a>
            </div>
        </section>
    )
};

export default Header;