import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import Element from './Element.component';

const Cart = () => {
    const { data, setData } = React.useContext(AppContext)

    const handleDelete = (e) => {
        // setData(()=>data.filter(f=>(f.image !== id && f.size !== e.target.dataset.size)))
        data.splice(e.target.dataset.index, 1);
        setData([...data]);
        // const productCart = data.filter(f => f.image === id)
        const productCart = [...data]
        // productCart.filter(f => f.size === e.target.dataset.size)
        if (productCart) {
            // const afterDelete = data.filter(product => product.image !== id && product.size !== e.target.dataset.size)
            const afterDelete = [...data]
            localStorage.setItem('sneakershop',
            JSON.stringify(afterDelete))
            return afterDelete
        }
    }

    const sum = (arr) => {
        let sum = 0;
        arr.map(m => {
            sum += m.price * m.quantity
        })
        return sum;
    }

    return (
        <>
            <div className="dropdown cart-dropdown">
                <Link to="/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{data.length}</span>
                </Link>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                        <Element data={data} delete={handleDelete} />
                    </div>

                    <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">${sum(data)}</span>

                    </div>
                    <div className="dropdown-cart-action">
                        <Link to="cart" className="btn btn-primary">View Cart</Link>
                        <Link to="checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;