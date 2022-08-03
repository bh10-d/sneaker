import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import { url } from "../../utils/request";
import { toast } from 'react-toastify';
import Toast from '../../components/toast/Toast.component';
const Status = ({ status }) => {
  if (status === "new") {
    return <span className="product-label label-new">New</span>;
  }

  if (status === "top") {
    return <span className="product-label label-top">Top</span>;
  }

  if (status === "out") {
    return <span className="product-label label-out">Out of stock</span>;
  }
};

const Card = (props) => {
  const { addProductCart, discount, addProductWishlist } = React.useContext(AppContext);
  const [image, setImage] = useState(
    props.path.find((m) => m.product_id == props.id).image_color
  );

  const handleClick = (e) => {
    const path = e.target.src.split(/\//)
    console.log(path);
    setImage(path[path.length - 1]);
  };
  const checkSale = useMemo(() => {
    const test = discount.find(
      (f) => f.product_id === props.id && f.status == 1
    );
    return test;
  }, []);
  const handelAddToCart = () => {
    notify()
    if (checkSale != null) {
      addProductCart({
        ...props.product,
        size: "",
        image: image,
        price: props.product.price - (props.product.price * checkSale.percent) / 100
      });
    } else {
      addProductCart({
        ...props.product,
        size: "",
        image: image,
      });
    }
  };
  const handleAddToWishlist = () => {
    const notify = () => toast(<p>Add to wishlist successfully</p>)
    notify()
    addProductWishlist({
      ...props.product,
      image: image,
      price: props.product.price
    })
  }
  const notify = () => toast(<p>Add to cart successfully</p>);
  return (
    <>
    <Toast/>
      <div className={(props.className === undefined) ? "col-6 col-md-4 col-lg-4" : props.className} key={props.id}>
        <div className="product product-7 text-center">
          <figure className="product-media">
            <Status status={props.status} />

            <Link to={`/detail/${image}/${props.id}`}>
              <img src={`/images/image_products/${image}`} alt={props.name} className="product-image" />
            </Link>

            <div className="product-action-vertical">
              <button
                className="btn-product-icon btn-wishlist btn-expandable"
                onClick={handleAddToWishlist}
              >
                <span>add to wishlist</span>
              </button>
              <a
                href="popup/quickView.html"
                className="btn-product-icon btn-quickview"
                title="Quick view"
              >
                <span>Quick view</span>
              </a>
              <a
                href="#"
                className="btn-product-icon btn-compare"
                title="Compare"
              >
                <span>Compare</span>
              </a>
            </div>

            <div className="product-action">
              <span
                style={{ cursor: "pointer" }}
                className="btn-product btn-cart"
                onClick={handelAddToCart}
              >
                <span>add to cart</span>
              </span>
            </div>
          </figure>

          <div className="product-body">
            <div className="product-cat">
              <a href={'#'}>{props.type}</a>
            </div>
            <h3 className="product-title">
              <a href="product.html">{props.name}</a>
            </h3>
            <div className="product-price">
              {checkSale === undefined ? (
                <>
                  <span className="new-price">Now ${props.price}</span>
                </>
              ) : (
                <>
                  <span className="new-price">
                    Now $
                    {+props.price -
                      (+props.price * checkSale.percent) / 100}
                  </span>
                  <span className="old-price">${props.price}</span>
                </>
              )}
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }}></div>
              </div>
              <span className="ratings-text">( {props.review} Reviews )</span>
            </div>

            <div className="product-nav product-nav-thumbs">
              {props.path !== undefined ? (

                props.path.map((m, i) => {
                  if (m.product_id == props.id) {
                    return (
                      <span key={i} onClick={handleClick}>
                        <img src={url + m.image_color} alt="product desc" />
                      </span>
                    );
                  } else {
                    return "";
                  }
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
