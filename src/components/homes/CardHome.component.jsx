import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import { url } from "../../utils/request";
const CardHome = ({ product, path }) => {
  const { addProductCart, discount, addProductWishlist } = React.useContext(AppContext);
  const [image, setImage] = useState(
    path.find((m) => m.product_id === product.id).image_color
  );

  const handleClick = (e) => {
    const path = e.target.src.split(/\//);
    setImage(path[path.length - 1]);
  };
  const checkSale = useMemo(() => {
    const test = discount.find(
      (f) => f.product_id === product.id && f.status == 1
    );
    return test;
  }, []);
  const handelAddToCart = () => {
    if (checkSale != null) {
      addProductCart({
        ...product,
        size: "",
        image: image,
        price: product.price - (product.price * checkSale.percent) / 100
      });
    } else {
      addProductCart({
        ...product,
        size: "",
        image: image,
      });
    }
  };
  const handleAddToWishlist = (props) => {
    addProductWishlist({
      ...props.product,
      image: image,
      price: props.product.price
    })
  }
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
        <div className="product product-3 text-center">
          <figure className="product-media">
            {checkSale === undefined ? (
              ""
            ) : (
              <>
                <span className="product-label label-primary">Sale</span>
                <span className="product-label label-sale">
                  {checkSale.percent}% off
                </span>
              </>
            )}

            <a href="product.html">
              <img src={url + image} alt="" className="product-image" />
            </a>

            <div className="product-action-vertical">
              <button
                onClick={handleAddToWishlist}
                className="btn-product-icon btn-wishlist btn-expandable"
              >
                <span>add to wishlist</span>
              </button>
            </div>
          </figure>

          <div className="product-body">
            <div className="product-cat">
              <Link to="/product">{product.brand}</Link>
            </div>
            <h3 className="product-title">
              <Link to={`/detail/${image}/${product.id}`}>{product.name}</Link>
            </h3>
            <div className="product-price">
              {checkSale === undefined ? (
                <>
                  <span className="new-price">Now ${product.price}</span>
                </>
              ) : (
                <>
                  <span className="new-price">
                    Now $
                    {+product.price -
                      (+product.price * checkSale.percent) / 100}
                  </span>
                  <span className="old-price">${product.price}</span>
                </>
              )}
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
                if (image.product_id === product.id) {
                  return (
                    <span key={index} onClick={handleClick}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={url + image.image_color}
                        alt=""
                      />
                    </span>
                  );
                } else {
                  return "";
                }
              })}
            </div>
            <div className="product-action">
              <span
                // () => {
                //   addProductCart(product, image);
                // }
                onClick={handelAddToCart}
                style={{ cursor: "pointer" }}
                className="btn-product btn-cart"
                title="Add to cart"
              >
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
