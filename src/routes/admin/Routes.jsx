import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import DashBoard from '../../pages/admin/Dashboard.component';
import AddBrand from '../../pages/admin/AddBrand.component';
import Customers from '../../pages/admin/Customers.component';
import Products from '../../pages/admin/Products.component';
import AddProduct from '../../pages/admin/AddProduct.component';
import AddImage from '../../pages/admin/AddImage.component';
import AddSize from '../../pages/admin/AddSize.component';
import Location from '../../pages/admin/Location.component';
// import './layout.css';
// import '../../assets/boxicons-2.0.7/css/boxicons.min.css';
// import '../../assets/css/grid.css';
// import '../../assets/css/theme.css';
// import '../../assets/css/index.css';


const CustomRoutes = () => {
    const { admin } = React.useContext(AppContext);

    return (
        <>
            {(admin) ? (
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="add_brand" element={<AddBrand />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="products" element={<Products />} />
                    <Route path="add_product" element={<AddProduct />} />
                    <Route path="add_image" element={<AddImage />} />
                    <Route path="add_size" element={<AddSize />} />
                    <Route path="add_location" element={<Location />} />
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
