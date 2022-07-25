import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Advertise from '../../components/homes/Advertise.component';
import TabDetail from '../../components/homes/TabDetail.component';
import BannerObject from '../../components/homes/BannerObject.component';
import 'swiper/css';
import "swiper/css/pagination";


const tabs = ["New", "Top selling", "Sale"];
const Home = () => {
  const test_product = [
    {
      id: 1,
      brand: "Adidas",
      name: "Forum Low CL",
      type: 1,
      percent: 20,
      price: "250",
      reviews: 2,

    },
    {
      id: 2,
      brand: "Adidas",
      name: "SuperStar",
      type: 1,
      percent: 25,
      price: "300",
      review: 3
    }
  ]
  const test_image = [
    {
      id: 1,
      path: "Giay_Forum_Low_CL_trang_HQ6874_01_standard-removebg-preview.png"
    },
    {
      id: 1,
      path: "Giay_Forum_Low_CL_trang_HQ6875_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "Giay_Superstar_trang_GZ3742_01_standard-removebg-preview.png"
    }
  ]
  const [type, setType] = useState("New");
  const [products, setProducts] = useState(test_product);
  const [images, setImages] = useState(test_image);
  useEffect(() => {
    if (type === "New") {
      // fetch(`https://jsonplaceholder.typicode.com/....`)
      // .then((res) => res.json())
      // .then((image) => {
      //   setImages(image);
      // });
    }
  }, [type]);
  return (
    <>
      <main className="main">
        <div className="container mb-2">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <figure>
                <img src={`/images/demos/demo-10/slider/slide-1.jpg`} alt="" />
              </figure>
              <div className="intro-content">
                <h3 className="intro-subtitle">Deals and Promotions</h3>
                <h1 className="intro-title text-white">
                  Sneakers & Athletic Shoes
                </h1>

                <div className="intro-price text-white">from $9.99</div>
                <Link to="/product" className="btn btn-white-primary btn-round">
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide><img src={`/images/demos/demo-10/slider/slide-2.jpg`} alt="" /></SwiperSlide>
            <SwiperSlide><img src={`/images/demos/demo-10/slider/slide-3.jpg`} alt="" /></SwiperSlide>
          </Swiper>
        </div>

        <div className="banner-group">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="banner banner-overlay">
                      <a href="#">
                        <img
                          src="/images/demos/demo-10/banners/banner-1.jpg"
                          alt="Banner"
                        />
                      </a>

                      <div className="banner-content banner-content-right">
                        <h4 className="banner-subtitle">
                          <a href="#">New Arrivals</a>
                        </h4>
                        <h3 className="banner-title text-white">
                          <a href="#">
                            Sneakers & <br />
                            Athletic Shoes
                          </a>
                        </h3>
                        <a
                          href="#"
                          className="btn btn-outline-white banner-link btn-round"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="banner banner-overlay banner-overlay-light">
                      <a href="#">
                        <img
                          src="/images/demos/demo-10/banners/banner-2.jpg"
                          alt="Banner"
                        />
                      </a>

                      <div className="banner-content">
                        <h4 className="banner-subtitle bright-black">
                          <a href="#">Clearance</a>
                        </h4>
                        <h3 className="banner-title">
                          <a href="#">Sandals</a>
                        </h3>
                        <div className="banner-text">
                          <a href="#">up to 70% off</a>
                        </div>
                        <a
                          href="#"
                          className="btn btn-outline-gray banner-link btn-round"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="banner banner-large banner-overlay d-none d-sm-block">
                  <a href="#">
                    <img
                      src="/images/demos/demo-10/banners/banner-3.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle text-white">
                      <a href="#">On Sale</a>
                    </h4>
                    <h3 className="banner-title text-white">
                      <a href="#">Slip-On Loafers</a>
                    </h3>
                    <div className="banner-text text-white">
                      <a href="#">up to 30% off</a>
                    </div>
                    <a
                      href="#"
                      className="btn btn-outline-white banner-link btn-round"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-sm-none d-lg-block">
                <div className="banner banner-middle banner-overlay">
                  <a href="#">
                    <img
                      src="/images/demos/demo-10/banners/banner-4.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content banner-content-bottom">
                    <h4 className="banner-subtitle text-white">
                      <a href="#">On Sale</a>
                    </h4>
                    <h3 className="banner-title text-white">
                      <a href="#">
                        Amazing <br />
                        Lace Up Boots
                      </a>
                    </h3>
                    <div className="banner-text text-white">
                      <a href="#">from $39.00</a>
                    </div>
                    <a
                      href="#"
                      className="btn btn-outline-white banner-link btn-round"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="icon-boxes-container icon-boxes-separator bg-transparent">
          <div className="container">
            <div className="row">
              <Advertise/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <BannerObject/>
          </div>
        </div>

        <div className="mb-4"></div>

        <div className="container">
          <div className="heading heading-center mb-3">
            <h2 className="title-lg mb-2">My products</h2>



            <ul className="nav nav-pills justify-content-center" role="tablist">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onClick={() => { setType(tab) }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    className={
                      tab === type ? `${"nav-link"} ${"active"}` : "nav-link"
                    }
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
            <TabDetail tab={type} data={products} images={images} />
          </div>


          {/* xem them */}
          <div className="more-container text-center mt-5">
            <Link
              to="/product"
              className="btn btn-outline-lightgray btn-more btn-round"
            >
              <span>View more products</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>

          {/* <div className="mb-5">
            <div className="container">
              <div
                className="cta cta-horizontal cta-horizontal-box bg-image mb-4 mb-lg-6"
                style={{
                  backgroundImage: "url(images/demos/demo-10/bg-1.jpg)",
                }}
              >
                <div className="row flex-column flex-lg-row align-items-lg-center">
                  <div className="col">
                    <h3 className="cta-title text-primary">
                      New Deals! Start Daily at 12pm e.t.
                    </h3>
                    <p className="cta-desc">
                      Get{" "}
                      <em className="font-weight-medium">
                        FREE SHIPPING* & 5% rewards
                      </em>{" "}
                      on every order with Molla Theme rewards program
                    </p>
                  </div>

                  <div className="col-auto">
                    <a href="#" className="btn btn-white-primary btn-round">
                      <span>Add to Cart for $50.00/yr</span>
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Home;
