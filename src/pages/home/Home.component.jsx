import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CardHome from "../../components/homes/CardHome.component";


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
      path: "/images/demos/demo-10/products/Giay_Forum_Low_CL_trang_HQ6874_01_standard-removebg-preview.png"
    },
    {
      id: 1,
      path: "/images/demos/demo-10/products/Giay_Forum_Low_CL_trang_HQ6875_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "/images/image_products/Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "/images/image_products/Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png"
    },
    {
      id: 2,
      path: "/images/image_products/Giay_Superstar_trang_GZ3742_01_standard-removebg-preview.png"
    }
  ]
  const [type, setType] = useState("New");
  const [products, setProducts] = useState(test_product);
  const [images, setImages] = useState(test_image);
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //   .then((res) => res.json())
    //   .then((product) => {
    //     setProducts(product);
    //   });
  }, [type]);
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
        <div className="container">
          <div className="intro-slider-container slider-container-ratio mb-2">
            <div
              className="intro-slider owl-carousel owl-simple owl-light owl-nav-inside"
              data-toggle="owl"
              data-owl-options='{"nav": false}'
            >
              <div className="intro-slide">
                <figure className="slide-image">
                  <picture>
                    <source
                      media="(max-width: 480px)"
                      srcSet="/images/demos/demo-10/slider/slide-1-480w.jpg"
                    />
                    <img
                      src="/images/demos/demo-10/slider/slide-1.jpg"
                      alt="Image Desc"
                    />
                  </picture>
                </figure>

                <div className="intro-content">
                  <h3 className="intro-subtitle">Deals and Promotions</h3>
                  <h1 className="intro-title text-white">
                    Sneakers & Athletic Shoes
                  </h1>

                  <div className="intro-price text-white">from $9.99</div>

                  <a
                    href="category.html"
                    className="btn btn-white-primary btn-round"
                  >
                    <span>SHOP NOW</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="intro-slide">
                <figure className="slide-image">
                  <picture>
                    <source
                      media="(max-width: 480px)"
                      srcSet="/images/demos/demo-10/slider/slide-2-480w.jpg"
                    />
                    <img
                      src="/images/demos/demo-10/slider/slide-2.jpg"
                      alt="Image Desc"
                    />
                  </picture>
                </figure>

                <div className="intro-content">
                  <h3 className="intro-subtitle">Trending Now</h3>
                  <h1 className="intro-title text-white">
                    This Week's Most Wanted
                  </h1>

                  <div className="intro-price text-white">from $49.99</div>

                  <a
                    href="category.html"
                    className="btn btn-white-primary btn-round"
                  >
                    <span>SHOP NOW</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="intro-slide">
                <figure className="slide-image">
                  <picture>
                    <source
                      media="(max-width: 480px)"
                      srcSet="/images/demos/demo-10/slider/slide-3-480w.jpg"
                    />
                    <img
                      src="/images/demos/demo-10/slider/slide-3.jpg"
                      alt="Image Desc"
                    />
                  </picture>
                </figure>

                <div className="intro-content">
                  <h3 className="intro-subtitle text-white">
                    Deals and Promotions
                  </h3>
                  <h1 className="intro-title text-white">
                    Can’t-miss Clearance:
                  </h1>

                  <div className="intro-price text-white">
                    starting at 60% off
                  </div>

                  <a
                    href="category.html"
                    className="btn btn-white-primary btn-round"
                  >
                    <span>SHOP NOW</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <span className="slider-loader"></span>
          </div>
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
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-primary">
                    <i className="icon-rocket"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Free Shipping</h3>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-primary">
                    <i className="icon-rotate-left"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Free Returns</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-primary">
                    <i className="icon-info-circle"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                    <p>when you sign up</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-primary">
                    <i className="icon-life-ring"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">We Support</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4">
              <div className="banner banner-cat">
                <a href="#">
                  <img
                    src="/images/demos/demo-10/banners/banner-5.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-overlay text-center">
                  <h3 className="banner-title font-weight-normal">Women's</h3>
                  <h4 className="banner-subtitle">125 Products</h4>
                  <a href="category.html" className="banner-link">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="banner banner-cat">
                <a href="#">
                  <img
                    src="/images/demos/demo-10/banners/banner-6.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-overlay text-center">
                  <h3 className="banner-title font-weight-normal">Men's</h3>
                  <h4 className="banner-subtitle">97 Products</h4>
                  <a href="category.html" className="banner-link">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="banner banner-cat">
                <a href="#">
                  <img
                    src="/images/demos/demo-10/banners/banner-7.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-overlay text-center">
                  <h3 className="banner-title font-weight-normal">Kid's</h3>
                  <h4 className="banner-subtitle">48 Products</h4>
                  <a href="category.html" className="banner-link">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
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
            <div
              className="tab-pane p-0 fade show active"
              id="top-all-tab"
              role="tabpanel"
              aria-labelledby="top-all-link"
            >
              <div className="products just-action-icons-sm">
                <div className="row">
                  {products.map((product, index) => (
                    <CardHome key={index} product={product} path={images} />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="tab-pane p-0 fade"
              id="top-women-tab"
              role="tabpanel"
              aria-labelledby="top-women-link"
            >
              <div className="products just-action-icons-sm">
                <div className="row">
                  {products.map((product, index) => (
                    <CardHome key={index} product={product} path={images} />
                  ))}
                </div>
              </div>
            </div>
            {/* end */}
            <div
              className="tab-pane p-0 fade"
              id="top-men-tab"
              role="tabpanel"
              aria-labelledby="top-men-link"
            >
              <div className="products just-action-icons-sm">
                <div className="row">
                  {products.map((product, index) => (
                    <CardHome key={index} product={product} path={images} />
                  ))}
                </div>
              </div>
            </div>
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
