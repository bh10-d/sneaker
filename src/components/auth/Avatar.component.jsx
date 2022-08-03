import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import { url } from '../../utils/request';
const Avatar = () => {
    const { auth, logout, admin, info } = React.useContext(AppContext);
    return (
        (auth) ? (
            <div className="dropdown cart-dropdown">
                <div className="dropdown-toggle" style={{ width: '40px', height: '40px' }}>
                    <Link to="/user">
                        <img style={{ borderRadius: '50%' }} src={(info.profile_image == '')?"/images/team/about-2/buiduchieu.jpg":url+info.profile_image} alt="" />
                    </Link>
                </div>
                <div className="dropdown-menu dropdown-menu-right">
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{ display: 'flex', marginBottom: '10px'}}>
                            <p>Hello:</p>
                            <p style={{ marginLeft: '6px', fontWeight: 'bold' }}>{info.name}</p>
                        </div>
                        {(!admin)?(<Link className="choose" to="/user"><i className='bx bx-user' ></i> Personal Infomation</Link>):(<Link className="choose" to="/admin"><i className='bx bxs-dashboard'></i> Dashboard</Link>)}
                        <Link className="choose" to="/cart"><i className='bx bx-cart-alt'></i> Cart</Link>
                        <Link className="choose" to="/user/wishlist"><i className='bx bx-heart' ></i> Wishlist</Link>
                        <Link className="choose" to="/user/order"><i className='bx bxs-shopping-bags' ></i> Order</Link>
                        <p onClick={()=>logout()} className="btn btn-primary" style={{marginTop: '10px', cursor: 'pointer'}}>Log out</p>
                    </div>
                </div>
            </div>
        ) : (
            <div style={{ border: '1px solid black', borderRadius: '25px', marginLeft: '10px', marginTop: '0.8rem' }}>
                <Link to="/auth">
                    <div style={{ padding: '5px' }}>
                        <i className="icon-user"></i> LOGIN
                    </div>
                </Link>
            </div>
        )

    )
}

export default Avatar;