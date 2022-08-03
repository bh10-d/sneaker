import React, { useState, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { url } from "../../utils/request";
const CardDetail = ({ idProduct, imageFirst }) => {
  const { images_detail } = React.useContext(AppContext);
  const [image, setImage] = useState(imageFirst); //'/images/products/single/extended/3.jpg'
    
  let getProduct = (imageFirst) => {
    let newArr = images_detail.filter((f) => f.image_color === imageFirst);
    return newArr;
  };

  useEffect(() => {
    setImage(imageFirst)
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
              alt=""
            />
            {/* <a
              href="#"
              id="btn-product-gallery"
              className="btn-product-gallery"
            >
              <i className="icon-arrows"></i>
            </a> */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
