import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import Element from './Element.component';

const Cart = () => {
    const { test, setTest } = React.useContext(AppContext)

    const handleDelete = (e) => {
        let id = e.target.id;
        setTest(()=>test.filter(f=>f.id!==id))
        const productCart = test.filter(f=>f.id === e.target.id)
            // console.log(productCart)
            if(productCart){
                const afterDelete = test.filter( product => product.id !== e.target.id)
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
                    <span className="cart-count">{test.length}</span>
                </Link>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                        <Element data={test} delete={handleDelete}/>
                    </div>

                    <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">${sum(test)}</span>

                    </div>
                    <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;