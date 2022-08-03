import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import Sidebar from '../../components/user/SideBar.component';

const WishList = () => {
    const { wishlist, setWishlist } = useContext(AppContext);

    const handleDelete = (e) => {
        wishlist.splice(e.target.dataset.index, 1);
        setWishlist([...wishlist]);
        const productCart = [...wishlist]
        if (productCart) {
            const afterDelete = [...wishlist]
            localStorage.setItem('wishlist',
            JSON.stringify(afterDelete))
            return afterDelete
        }
    }
    return (
        <>
            <main className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <Sidebar />
                            <div className="col-9">
                                <table className="table table-wishlist table-mobile">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            {/* <th>Stock Status</th> */}
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {/* <tr>
                                        <td className="product-col">
                                            <div className="product">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src="/images/products/table/product-1.jpg" alt="Product image"/>
                                                    </a>
                                                </figure>

                                                <h3 className="product-title">
                                                    <a href="#">Beige knitted elastic runner shoes</a>
                                                </h3>
                                            </div>
                                        </td>
                                        <td className="price-col">$84.00</td>
                                        <td className="stock-col"><span className="in-stock">In stock</span></td>
                                        <td className="action-col">
                                            <div className="dropdown">
                                            <button className="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="icon-list-alt"></i>Select Options
                                            </button>

                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">First option</a>
                                                <a className="dropdown-item" href="#">Another option</a>
                                                <a className="dropdown-item" href="#">The best option</a>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                    </tr> */}

                                        {wishlist.map(product => (
                                            <tr key={product.image}>
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <Link to={`/detail/${product.image}/${product.id}`}>
                                                                <img src={`/images/image_products/${product.image}`} alt="Product image" />
                                                            </Link>
                                                        </figure>

                                                        <h3 className="product-title">
                                                            <Link to={`/detail/${product.image}/${product.id}`}>{product.name}</Link>
                                                        </h3>
                                                    </div>
                                                </td>
                                                <td className="price-col">${product.price}</td>
                                                {/* <td className="stock-col"><span className="in-stock">In stock</span></td> */}
                                                <td className="action-col">
                                                    <button className="btn btn-block btn-outline-primary-2"><i className="icon-cart-plus"></i>Add to Cart</button>
                                                </td>
                                                <td className="remove-col"><button className="btn-remove" onClick={handleDelete}><i className="icon-close"></i></button></td>
                                            </tr>
                                        ))}

                                        {/* <tr>
                                        <td className="product-col">
                                            <div className="product">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src="/images/products/table/product-3.jpg" alt="Product image"/>
                                                    </a>
                                                </figure>

                                                <h3 className="product-title">
                                                    <a href="#">Orange saddle lock front chain cross body bag</a>
                                                </h3>
                                            </div>
                                        </td>
                                        <td className="price-col">$52.00</td>
                                        <td className="stock-col"><span className="out-of-stock">Out of stock</span></td>
                                        <td className="action-col">
                                            <button className="btn btn-block btn-outline-primary-2 disabled">Out of Stock</button>
                                        </td>
                                        <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                    </tr> */}
                                    </tbody>
                                </table>
                                <div className="wishlist-share">
                                    <div className="social-icons social-icons-sm mb-2">
                                        <label className="social-label">Share on:</label>
                                        <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                        <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default WishList;