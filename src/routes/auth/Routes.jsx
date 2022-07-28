import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../../pages/404/ErrorPage.component';
import Auth from '../../pages/auth/Auth.component';


import '../../assets/css/bootstrap.min.css';
import '../../assets/css/demo-10.css';
import '../../assets/css/skin-demo-10.css';
import '../../assets/css/style.css';

const CustomRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Auth />} /> 
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default CustomRoutes
