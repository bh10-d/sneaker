import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorPage from '../../pages/404/ErrorPage.component';
import Auth from '../../pages/auth/Auth.component';
import ForgotPassword from '../../pages/auth/ForgotPassword';
import ResetPassword from '../../pages/auth/ResetPassword.component';

import { AppContext } from '../../context/AppProvider';

const CustomRoutes = () => {
    const navigate = useNavigate()
    const { auth } = React.useContext(AppContext);

    return (
        <>
            <Routes>
                <Route exact path="/" element={auth ? navigate('/'):<Auth/>} />
                <Route exact path="register" element={<Auth />} />
                <Route exact path="forgotpassword" element={<ForgotPassword />} />
                <Route exact path="reset_password/:email/:token" element={<ResetPassword />} />
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default CustomRoutes
