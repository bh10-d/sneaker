import React, { useState, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";

const CardDetail = ({ idProduct, imageFirst }) => {
  const { fakeImageDetail } = React.useContext(AppContext);
  const [image, setImage] = useState(imageFirst); //'/images/products/single/extended/3.jpg'
    console.log(imageFirst);
  let getProduct = (imageFirst) => {
    let newArr = fakeImageDetail.filter((f) => f.image_color === imageFirst);
    return newArr;
  };
  useEffect(() => {
    setImage(imageFirst)
    // return () => {
       
    // };
  }, [imageFirst]);
  const handleClick = (e) => {
    const path = e.target.src.split(/\//)
    setImage(path[path.length-1]);
  };

  return (
      <>
      <div className="col-md-6">
        <div className="product-gallery">
          <figure className="product-main-image">
            <img
              id="product-zoom"
              src={`/images/image_products/${image}`}
              alt="product image"
            />
            <a
              href="#"
              id="btn-product-gallery"
              className="btn-product-gallery"
            >
              <i className="icon-arrows"></i>
            </a>
          </figure>

          <div id="product-zoom-gallery" className="product-image-gallery">
            {getProduct(imageFirst).map((m, index) => (
              <span key={index} onClick={handleClick}>
                <img
                  src={`/images/image_products/${m.image_detail}`}
                  alt="product desc"
                />
              </span>
            ))}
            {/* <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/1-big.jpg" alt="product side" />
                        </span>

                        <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/2-big.jpg" alt="product cross" />
                        </span>

                        <span className="product-gallery-item active" onClick={handleClick}>
                            <img src="images/products/single/extended/3-big.jpg" alt="product with model" />
                        </span>

                        <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/4-big.jpg" alt="product back" />
                        </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
