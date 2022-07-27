import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import './sidebar.css'


import sidebar_items from '../../../assets/JsonData/sidebar_routes.json';

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {
    let location = useLocation();
    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname.slice(7,location.pathname.length))

    return (
        <div className='sidebar_admin'>
            <div className="sidebar__logo">
                <h2>SNEAKER SHOP</h2>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
