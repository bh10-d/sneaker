import React from 'react'
import CustomRoutes from './Routes';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';


const UserLayout = () => {
    return (
        <>
            <Header />
            <CustomRoutes />
            <Footer />
        </>
    )
}

export default UserLayout;
