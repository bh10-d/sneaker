import React, { useState, useMemo, useRef } from "react";
import { AppContext } from "../../context/AppProvider";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import CardDetail from "../../components/details/CardDetail.component";
import TabDetail from "../../components/details/TabDetail.component";
import Card from "../../components/products/Card.component";
import { url } from "../../utils/request";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const tabs = [
  "Description",
  "Additional information",
  "Shipping & Returns",
  "Reviews",
];

const Detail = () => {
  const {
    addProductCart,
    products,
    images_color,
    sizes,
    fakeComments,
    discount,
  } = React.useContext(AppContext);
  let { id, image } = useParams();
  const [infoProduct, setInfoProduct] = useState({
    imageColor: image,
    size: "",
    price: "",
  });
  console.log(infoProduct);
  const [active, setActive] = useState(infoProduct.imageColor);
  const [type, setType] = useState("Description");
  // const [loading, setLoading] = useState(true)
  const getProduct = useMemo(() => {
    let newArr = products.find((f) => f.id === +id);
    newArr = { ...newArr };
    return newArr;
  }, [infoProduct.size, products]);

  const ref = useRef();

  const handleClick = (e) => {
    const path = e.target.src.split(/\//);
    let newImage = path[path.length - 1]
    setInfoProduct({...infoProduct, imageColor: newImage, size: ""});
    console.log(newImage);
    setActive(path[path.length - 1]);
    ref.current[0].defaultSelected = true;
    console.log(ref);
  };

  const getSize = (e) => {
    setInfoProduct({ ...infoProduct, size: e.target.value });
    ref.current[0].defaultSelected = false;
  };
  const checkQuantity = useMemo(() => {
    if (infoProduct.size === "") {
      return 0;
    } else {
      return sizes.find(
        (f) =>
          f.image_color === infoProduct.imageColor &&
          f.size_id == infoProduct.size
      ).quantity;
    }
  }, [infoProduct.size]);
  console.log(checkQuantity);
  const checkSale = useMemo(() => {
    const check = discount.find((f) => f.product_id === +id && f.status == 1);
    if (check != undefined) {
      return discount.find((f) => f.product_id === +id && f.status === 1);
    }
    return undefined;
  }, [discount]);

  const handelAddToCart = () => {
    if (checkSale != null) {
      addProductCart({
        ...getProduct,
        size: infoProduct.size,
        price: getProduct.price - (getProduct.price * checkSale.percent) / 100,
        image: infoProduct.imageColor,
      });
    } else {
      addProductCart({ ...getProduct, image: infoProduct.imageColor, size: infoProduct.size});
    }
    // addProductCart(getProduct, infoProduct.imageColor);
  };

  return (
    <>
      <main className="main">
        {/* <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Extended Description
              </li>
            </ol>

            <nav className="product-pager ml-auto" aria-label="Product">
              <a
                className="product-pager-link product-pager-prev"
                href="#"
                aria-label="Previous"
                tabIndex="-1"
              >
                <i className="icon-angle-left"></i>
                <span>Prev</span>
              </a>

              <a
                className="product-pager-link product-pager-next"
                href="#"
                aria-label="Next"
                tabIndex="-1"
              >
                <span>Next</span>
                <i className="icon-angle-right"></i>
              </a>
            </nav>
          </div>
        </nav> */}

        <div className="page-content">
          <div className="container">
            <div className="product-details-top mb-2">
              <div className="row">
                {/* truyen id anh vao day de thay doi anh mo ta hien thi */}
                <CardDetail
                  idProduct={id}
                  imageFirst={infoProduct.imageColor}
                />
                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">{getProduct.name}</h1>

                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <a
                        className="ratings-text"
                        href="#product-review-link"
                        id="review-link"
                      >
                        ( Reviews )
                      </a>
                    </div>
                    {checkSale === undefined ? (
                      <div className="product-price">${getProduct.price}</div>
                    ) : (
                      <div className="product-price">
                        $
                        {getProduct.price -
                          (getProduct.price * checkSale.percent) / 100}
                      </div>
                    )}

                    <div className="product-content">
                      <p>{getProduct.description}</p>
                    </div>

                    <div className="details-filter-row details-row-size">
                      <label>Color:</label>

                      <div className="product-nav product-nav-thumbs">
                        {images_color.map((m) => {
                          if (m.product_id == id) {
                            return (
                              <span
                                key={m.path + m.image_color}
                                className={
                                  m.image_color === active ? "active" : ""
                                }
                                onClick={handleClick}
                              >
                                <img src={url + m.image_color} alt="" />
                              </span>
                            );
                          }
                        })}
                      </div>
                    </div>

                    <div className="details-filter-row details-row-size">
                      <label htmlFor="size">Size:</label>
                      <div className="select-custom">
                        <select
                          ref={ref}
                          name="size"
                          id="size"
                          className="form-control"
                          onChange={getSize}
                        >
                          <option value="#">Select a size</option>
                          {sizes.map((m, index) => {
                            if (m.image_color === infoProduct.imageColor) {
                              return (
                                <option
                                  key={index + m.image_color}
                                  value={m.size_id}
                                >
                                  {m.size_id}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                    </div>
                    {/* 
                    <div
                      className="details-filter-row details-row-size"
                      style={{ visibility: "hidden" }}
                    >
                      <label htmlFor="qty">Qty:</label>
                      <div className="product-details-quantity">
                        <input
                          type="number"
                          id="qty"
                          className="form-control"
                          defaultValue="1"
                          min="1"
                          max="10"
                          step="1"
                          data-decimals="0"
                          required
                        />
                      </div>
                    </div> */}
                    {checkQuantity === 0 || checkQuantity === undefined ? (
                      ""
                    ) : (
                      <div className="product-details-action">
                        <button
                          style={{ cursor: "pointer" }}
                          href="#"
                          className="btn-product btn-cart"
                          // onClick={() => {
                          //   addProductCart(getProduct, infoProduct.imageColor);
                          //   // setSize('')
                          // }}
                          onClick={handelAddToCart}
                        >
                          <span>add to cart</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-tab product-details-extended">
            <div className="container">
              <ul
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className="nav-item"
                    onClick={() => {
                      setType(tab);
                    }}
                  >
                    <span
                      style={{ cursor: "pointer" }}
                      className={tab === type ? `nav-link active` : "nav-link"}
                      id="top-all-link"
                      data-toggle="tab"
                      href="#top-all-tab"
                      role="tab"
                      aria-controls="top-all-tab"
                      aria-selected="true"
                    >
                      {tab}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-content">
              <TabDetail tab={type} data={fakeComments} />
            </div>
          </div>
          <div className="container">
            <h2 className="title text-center mb-4">You May Also Like</h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
            >
              {products.map((m) => (
                <SwiperSlide key={m.id}>
                  <Card
                    id={m.id}
                    name={m.name}
                    type={m.type}
                    price={m.price}
                    path={images_color}
                    review={m.reviews}
                    status={m.status}
                    className={"none"}
                  />
                </SwiperSlide>
              ))}
              <SwiperSlide>asd</SwiperSlide>
              <SwiperSlide>jwjjqkwe</SwiperSlide>
              <SwiperSlide>accv,mbn</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;
