import React, { useEffect, useContext } from 'react'
import Sidebar from '../../components/admin/sidebar/Sidebar';
import TopNav from '../../components/admin/topnav/TopNav';
import CustomRoutes from './Routes';
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction';
import { AppContext } from '../../context/AppProvider';
import ErrorPage from '../../pages/404/ErrorPage.component';

import './layout.css';
import '../../assets/boxicons-2.0.7/css/boxicons.min.css';
// import '../../assets/css/grid.css';
import '../../assets/css/theme.css';
import '../../assets/css/index.css';

const AdminLayout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()
    const { admin } = useContext(AppContext);
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])


    if (admin) {
        return (


            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar />
                <div className="layout__content">
                    <TopNav />
                    <div className="layout__content-main">
                        <CustomRoutes />
                    </div>
                </div>
            </div>
        )
    } else {
        return (<ErrorPage />)
    }

}

export default AdminLayout;
