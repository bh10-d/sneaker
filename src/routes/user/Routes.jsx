import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import ErrorPage from '../../pages/404/ErrorPage.component';
import Info from '../../pages/info/Info.component';
import WishList from '../../pages/wishlist/WishList.component';
import Order from '../../pages/order/Order.component';
import ChangePass from '../../pages/changepass/ChangePass';


const CustomRoutes = () => {
    const { auth } = React.useContext(AppContext);
    return (
        <>
            {(auth) ? (
                <Routes>
                    <Route exact path="/" element={<Info />} />
                    <Route exact path="wishlist" element={<WishList />} />
                    <Route exact path="order" element={<Order />} />
                    <Route exact path="changepass" element={<ChangePass />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            )}


        </>
    )
}

export default CustomRoutes
