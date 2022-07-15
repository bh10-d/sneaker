import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../../context/AppProvider';

const CardHome = ({ product, path }) => {
  const { addProductCart, fakeDataApi,fakeImageApi } = React.useContext(AppContext);
  // console.log(fakeImageApi)
  const [image, setImage] = useState(
    path.find((m) => m.id === product.id).path
  );
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
        <div className="product product-3 text-center">
          <figure className="product-media">
            <span className="product-label label-primary">Sale</span>
            <span className="product-label label-sale">55% off</span>
            <a href="product.html">
              <img src={image} alt="Product image" className="product-image" />
            </a>

            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-wishlist btn-expandable"
              >
                <span>add to wishlist</span>
              </a>
            </div>
          </figure>

          <div className="product-body">
            <div className="product-cat">
              <Link to="/product">{product.brand}</Link>
            </div>
            <h3 className="product-title">
              <Link to="/product">{product.name}</Link>
            </h3>
            <div className="product-price">
              <span className="new-price">Now $125.99</span>
              <span className="old-price">${product.price}</span>
            </div>
          </div>

          <div className="product-footer">
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "0%" }}></div>
              </div>
              <span className="ratings-text">( 0 Reviews )</span>
            </div>
            <div className="product-nav product-nav-dots">
              {path.map((image, index) => {
                if(image.id === product.id) {
                    return (
                        <span key={index} onClick={(e) => setImage(e.target.src)}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={image.path}
                          alt=""
                        />
                      </span>
                    )
                }else{
                    return ''
                }
            })}
            </div>
            <div className="product-action">
              <span onClick={()=>{addProductCart(product,{image})}} style={{cursor: 'pointer'}} className="btn-product btn-cart" title="Add to cart">
                <span>add to cart</span>
              </span>
              <a
                href="popup/quickView.html"
                className="btn-product btn-quickview"
                title="Quick view"
              >
                <span>quick view</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHome;
