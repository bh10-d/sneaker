import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';


const SideBar = () => {
    const location = useLocation();
    const {admin} = React.useContext(AppContext);

    return (
        <>
            <div className="col-3">
                <div className="sidebar_info">
                    <Link to="/user" className={`${(location.pathname == "/user")?"sidebar_info_active":""}`} style={{ marginTop: '30px' }}><i className='bx bx-user' ></i> Personal infomation</Link>
                    <Link to="/cart" ><i className='bx bx-cart-alt'></i> Cart</Link>
                    <Link to="/user/wishlist" className={`${(location.pathname == "/user/wishlist")?"sidebar_info_active":""}`}><i className='bx bx-heart' ></i> Wishlist</Link>
                    <Link to="/user/order" className={`${(location.pathname == "/user/order")?"sidebar_info_active":""}`}><i className='bx bxs-shopping-bags' ></i> Order</Link>
                    {(admin)?(<Link to="/admin"><i className='bx bxs-dashboard'></i> Dashboard</Link>):(<Link to="/user/changepass" className={`${(location.pathname == "/user/changepass")?"sidebar_info_active":""}`}><i className="fa-solid fa-gear"></i> Change Password</Link>)}
                    
                </div>
            </div>
        </>
    )
}

export default SideBar;