import './Styledemo.styles.css';
import './Styleskin.styles.css';


import NavBar from '../navigation/NavBar.component';

const Header = ()=>{
    return (
        <>
        <header className="header header-8">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <a href="#">USD</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">Usd</a></li>
                                    <li><a href="#">Vnđ</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <a href="#">Eng</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">VietNam</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                    <li><a href="wishlist.html"><i className="icon-heart-o"></i>My Wishlist <span>(3)</span></a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            <a href="index.html" className="logo">
                                <img src="images/demos/demo-10/logo.png" alt="Molla Logo" width="105" height="25"/>
                            </a>
                        </div>
                        <NavBar/>
                </div>
            </div>
        </header>
        </>
    )
}


export default Header;