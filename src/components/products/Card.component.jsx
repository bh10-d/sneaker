import { useState } from 'react';

const Card = ({ value, status, name, image, price, type, onClick}) => {
    return (
        <>
        
            <div className="col-6 col-md-4 col-lg-4">
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <span className="product-label label-new">{value}</span>
                        <span className="product-label label-out">Out of Stock</span>
                        <span className="product-label label-top">{status}</span>
                        <a href="product.html">
                            <img src={image} alt={name} className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <a href="#">{type}</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">{name}</a></h3>
                        <div className="product-price">
                            {price}
                        </div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: "20%" }}></div>
                            </div>
                            <span className="ratings-text">( 2 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-thumbs" onClick={onClick}>
                            <a href="#" className="active">
                                <img value={1} src="images/products/product-4-thumb.jpg" alt="product desc" />
                            </a>
                            <a href="#">
                                <img value={2} src="images/products/product-4-2-thumb.jpg" alt="product desc" />
                            </a>

                            <a href="#">
                                <img value={3} src="images/products/product-4-3-thumb.jpg" alt="product desc" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;