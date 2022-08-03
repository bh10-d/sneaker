import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import Select from "./Select.component";
import { get } from "../../service/apiServices";
const Element = (props) => {
  const { sizes, setData} = React.useContext(AppContext);
  const [load, setLoad] = useState(props.data);

  const handleChange = (currSize, size, image) => {
    const index = props.data.findIndex(
      (m) => m.image == image && m.size == currSize
    ); // current index
    const nextIndex = props.data.findIndex(
      (m) => m.image == image && m.size == size
    ); //next index
    const check = props.data.filter(
      (product) => product.image == image && product.size == size
    ); // check so luong phan tu
    if (check.length != 0) {
      localStorage.removeItem("sneakershop");
      const currQuantity = props.data[index].quantity;
      console.log(sizes);
      if(checkQuantity(currQuantity, sizes, props.data[nextIndex].quantity, image, size) > 0 ) {
        props.data[nextIndex].quantity += currQuantity;
        props.data.splice(index, 1);
        const afterEdit = [...props.data];
        setData(afterEdit);
        const jsonProducts = JSON.stringify(afterEdit);
        localStorage.setItem("sneakershop", jsonProducts);
      }
      else {
        console.log("Số lượng không đủ");
      }
    } else {
      props.data[index].size = size;
      const jsonProducts = JSON.stringify(props.data);
      localStorage.setItem("sneakershop", jsonProducts);
    }
  };
  const checkQuantity = (currentQuantity, sizes, nextQuantity, image, size) => {
    const quantitySize = sizes.find(f => f.size_id == size && f.image_color == image).quantity
    return quantitySize - currentQuantity - nextQuantity
  }
  useEffect(() => {
    setLoad(props.data);
  }, [props.data]);
  // console.log(sizes);
  return (
    <>
      {load.map((product, i) => (
        <div className="product" key={product.image + i}>
          <div className="product-cart-details">
            <h4 className="product-title">
              <Link to={`/detail/${product.image}/${product.id}`}>
                {product.name}
              </Link>
            </h4>

            <span className="cart-product-info">
              <span className="cart-product-qty">{product.quantity}</span>x $
              {product.price}
            </span>
            <div>
              <span>Size: </span>
              <Select
                name={product.name}
                image={product.image}
                quantity={product.quantity}
                price={product.price}
                size={product.size}
                childSize={sizes}
                handleChange={handleChange}
              />
            </div>
          </div>

          <figure className="product-image-container">
            <Link to="/product" className="product-image">
              <img
                src={`/images/image_products/${product.image}`}
                alt="product"
              />
            </Link>
          </figure>
          <span
            style={{ cursor: "pointer" }}
            onClick={props.delete}
            className="btn-remove"
            title="Remove Product"
          >
            <i
              id={product.image}
              data-size={product.size}
              data-index={i}
              className="icon-close"
            ></i>
          </span>
        </div>
      ))}
    </>
  );
};

export default Element;
