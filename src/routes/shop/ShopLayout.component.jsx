import React from 'react'
import CustomRoutes from './Routes';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';

// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/demo-10.css';
// import '../../assets/css/skin-demo-10.css';
// import '../../assets/css/style.css';

const ShopLayout = () => {
    return (
        <>
            <Header />
            <CustomRoutes />
            <Footer />
        </>
    )
}

export default ShopLayout;
