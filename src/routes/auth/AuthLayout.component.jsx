import React from 'react'
import CustomRoutes from './Routes';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';


const AuthLayout = () => {
    return (
        <>
            <Header />
            <CustomRoutes />
            <Footer />
        </>
    )
}

export default AuthLayout;
