import { Link, useLocation } from 'react-router-dom';
import Cart from '../cart/Cart.component';



const list = [
    {
        id: 1,
        content: 'Home',
        class: 'sf-with-ul',
        link: '/'
    },
    {
        id: 2,
        content: 'Product',
        class: 'sf-with-ul',
        link: '/product'
    },
    {
        id: 3,
        content: 'About',
        class: 'sf-with-ul',
        link: '/about'
    },
    {
        id: 4,
        content: 'FAQs',
        class: 'sf-with-ul',
        link: '/faq'
    },
    {
        id: 5,
        content: 'Contact',
        class: 'sf-with-ul',
        link: '/contact'
    },
    {
        id: 6,
        content: 'Login',
        class: 'sf-with-ul',
        link: '/login'
    },
]

const ChildNav = ({ props }) => {
    return (
        <>
            {/* <li className="megamenu-container active">
                <a href="index.html" className="sf-with-ul">Home</a>
            </li> */}
            <li>
                <Link to={props.link} className={props.class}>{props.content}</Link>
            </li>
        </>
    )

}

const NavBar = () => {
    let location = useLocation();
    return (
        <>
            <div className="header-right">
                <nav className="main-nav">
                    <ul className="menu sf-arrows">
                        {list.map(m => <ChildNav props={m} key={m.id} />)}
                    </ul>
                </nav>

                <div className="header-search">
                    <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                    <form action="#" method="get">
                        <div className="header-search-wrapper">
                            <label htmlFor="q" className="sr-only">Search</label>
                            <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                        </div>
                    </form>
                </div>
                <Cart />
            </div>
        </>
    )
}

export default NavBar;