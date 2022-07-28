import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home.component';
import Product from '../../pages/product/Product.component';
import Detail from '../../pages/detail/Detail.component';
import Info from '../../pages/info/Info.component';
import Cart from '../../pages/cart/Cart.component';
import Checkout from '../../pages/checkout/Checkout.component';
import FAQ from '../../pages/faq/faq.component';
import About from '../../pages/about/About.component';
import ErrorPage from '../../pages/404/ErrorPage.component';
import Contact from '../../pages/contact/Contact.component';
// import Auth from '../../pages/auth/Auth.component';


import '../../assets/css/bootstrap.min.css';
import '../../assets/css/demo-10.css';
import '../../assets/css/skin-demo-10.css';
import '../../assets/css/style.css';

const CustomRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="product" element={<Product />} />
                <Route exact path="detail/:image/:id" element={<Detail />} />
                <Route exact path="user" element={<Info />} />
                <Route exact path="cart" element={<Cart />} />
                <Route exact path="checkout" element={<Checkout />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="faq" element={<FAQ />} />
                <Route exact path="about" element={<About />} />
                {/* <Route exact path="auth" element={<Auth />} /> */}
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default CustomRoutes
