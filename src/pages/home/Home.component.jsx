const Home = () => {
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
                      srcSet="assets/images/demos/demo-10/slider/slide-1-480w.jpg"
                    />
                    <img
                      src="images/demos/demo-10/slider/slide-1.jpg"
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
                      srcSet="assets/images/demos/demo-10/slider/slide-2-480w.jpg"
                    />
                    <img
                      src="images/demos/demo-10/slider/slide-2.jpg"
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
                      srcSet="assets/images/demos/demo-10/slider/slide-3-480w.jpg"
                    />
                    <img
                      src="images/demos/demo-10/slider/slide-3.jpg"
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
                          src="images/demos/demo-10/banners/banner-1.jpg"
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
                          src="images/demos/demo-10/banners/banner-2.jpg"
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
                      src="images/demos/demo-10/banners/banner-3.jpg"
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
                      src="images/demos/demo-10/banners/banner-4.jpg"
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

        {/* <div className="bg-light pt-5 pb-10 mb-3">
                    <div className="container">
                        <div className="heading heading-center mb-3">
                            <h2 className="title-lg">New Arrivals</h2>

                            <ul className="nav nav-pills justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="new-women-link" data-toggle="tab" href="#new-women-tab" role="tab" aria-controls="new-women-tab" aria-selected="false">Women's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="new-men-link" data-toggle="tab" href="#new-men-tab" role="tab" aria-controls="new-men-tab" aria-selected="false">Men's</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content tab-content-carousel">
                            <div className="tab-pane tab-pane-shadow p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                                <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                    data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Sale</span>
                                            <span className="product-label label-sale">30% off</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-1.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Boots</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">The North Face Back-To-Berkeley Remtlz Mesh</a></h3>
                                            <div className="product-price">
                                                <span className="new-price">Now $50.00</span>
                                                <span className="old-price">$84.00</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "60%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#5f554b"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#806f55"}}><span className="sr-only">Color name</span></a>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>Add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>
                                            <div className="product-price">
                                                $77.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                                <img src="images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>
                                            <div className="product-price">
                                                $35.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "40%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 2 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#666666"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#b58853"}}><span className="sr-only">Color name</span></a>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Out Of Stock</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>
                                            <div className="product-price">
                                                <span className="out-price">$54.99</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "80%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Sale</span>
                                            <span className="product-label label-sale">40% off</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>
                                            <div className="product-price">
                                                <span className="new-price">Now $77.99</span>
                                                <span className="old-price">$130.00</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane tab-pane-shadow p-0 fade" id="new-women-tab" role="tabpanel" aria-labelledby="new-women-link">
                                <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                    data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Out Of Stock</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>
                                            <div className="product-price">
                                                <span className="out-price">$54.99</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "80%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                                <img src="images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>
                                            <div className="product-price">
                                                $35.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "40%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 2 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#666666"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#b58853"}}><span className="sr-only">Color name</span></a>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Sale</span>
                                            <span className="product-label label-sale">40% off</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>
                                            <div className="product-price">
                                                <span className="new-price">Now $77.99</span>
                                                <span className="old-price">$130.00</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Sale</span>
                                            <span className="product-label label-sale">30% off</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-1.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Boots</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">The North Face Back-To-Berkeley Remtlz Mesh</a></h3>
                                            <div className="product-price">
                                                <span className="new-price">Now $50.00</span>
                                                <span className="old-price">$84.00</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "60%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#5f554b"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#806f55"}}><span className="sr-only">Color name</span></a>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>
                                            <div className="product-price">
                                                $77.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane tab-pane-shadow p-0 fade" id="new-men-tab" role="tabpanel" aria-labelledby="new-men-link">
                                <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                    data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Sale</span>
                                            <span className="product-label label-sale">40% off</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>
                                            <div className="product-price">
                                                <span className="new-price">Now $77.99</span>
                                                <span className="old-price">$130.00</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                                <img src="images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>
                                            <div className="product-price">
                                                $35.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "40%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 2 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#666666"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#b58853"}}><span className="sr-only">Color name</span></a>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>
                                            <div className="product-price">
                                                $77.99
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "0%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 0 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-3 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-primary">Out Of Stock</span>
                                            <a href="product.html">
                                                <img src="images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                            </a>

                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>
                                            <div className="product-price">
                                                <span className="out-price">$54.99</span>
                                            </div>
                                        </div>

                                        <div className="product-footer">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "80%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4">
              <div className="banner banner-cat">
                <a href="#">
                  <img
                    src="images/demos/demo-10/banners/banner-5.jpg"
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
                    src="images/demos/demo-10/banners/banner-6.jpg"
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
                    src="images/demos/demo-10/banners/banner-7.jpg"
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
            <h2 className="title-lg mb-2">Top Selling Products</h2>

            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="top-all-link"
                  data-toggle="tab"
                  href="#top-all-tab"
                  role="tab"
                  aria-controls="top-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="top-women-link"
                  data-toggle="tab"
                  href="#top-women-tab"
                  role="tab"
                  aria-controls="top-women-tab"
                  aria-selected="false"
                >
                  Women's
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="top-men-link"
                  data-toggle="tab"
                  href="#top-men-tab"
                  role="tab"
                  aria-controls="top-men-tab"
                  aria-selected="false"
                >
                  Men's
                </a>
              </li>
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
                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">
                          Sale
                        </span>
                        <span className="product-label label-sale">
                          55% off
                        </span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/Giay_Forum_Low_CL_trang_HQ6874_01_standard-removebg-preview.png"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Heels</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Marc Jacobs Somewhere Sport Sandal
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">Now $125.99</span>
                          <span className="old-price">$275.00</span>
                        </div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#">
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src="images/demos/demo-10/products/Giay_Forum_Low_CL_trang_HQ6874_01_standard-removebg-preview.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src="images/demos/demo-10/products/Giay_Forum_Low_CL_trang_HQ6875_01_standard-removebg-preview.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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
                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Men’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Native Shoes Miles Denim Print
                          </a>
                        </h3>
                        <div className="product-price">$20.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#ffca51" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#bb8379" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#666666" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Native Shoes Miles Denim Print
                          </a>
                        </h3>
                        <div className="product-price">$57.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Splendid Roselyn II</a>
                        </h3>
                        <div className="product-price">$97.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#78645f" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#b89474" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#666666" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">New</span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Sandals</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Eric Michael Sandra</a>
                        </h3>
                        <div className="product-price">$42.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">
                          Sale
                        </span>
                        <span className="product-label label-sale">
                          30% off
                        </span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>

                        <div className="product-countdown-container">
                          <span className="product-contdown-title">
                            offer ends in:
                          </span>
                          <div
                            className="product-countdown countdown-compact"
                            data-until="2019, 11, 3"
                            data-compact="true"
                          ></div>
                        </div>

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
                          <a href="#">Men’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">ASICS Tiger Gel-Lyte MT</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">Now $77.99</span>
                          <span className="old-price">$130.00</span>
                        </div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#af5f23" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#806f55" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            The North Face Raedonda Boot Sneaker
                          </a>
                        </h3>
                        <div className="product-price">$97.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Heels</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Jessica Simpson Blayke</a>
                        </h3>
                        <div className="product-price">$20.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#cc6666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ccccff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">
                          Sale
                        </span>
                        <span className="product-label label-sale">
                          55% off
                        </span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Heels</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Marc Jacobs Somewhere Sport Sandal
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">Now $125.99</span>
                          <span className="old-price">$275.00</span>
                        </div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">New</span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Mules</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Crocs Crocband Clog</a>
                        </h3>
                        <div className="product-price">$25.75</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 7 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Men’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Vasque Sundowner GTX</a>
                        </h3>
                        <div className="product-price">$109.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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
                </div>
              </div>
            </div>
            <div
              className="tab-pane p-0 fade"
              id="top-men-tab"
              role="tabpanel"
              aria-labelledby="top-men-link"
            >
              <div className="products just-action-icons-sm">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Native Shoes Miles Denim Print
                          </a>
                        </h3>
                        <div className="product-price">$57.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">
                          Sale
                        </span>
                        <span className="product-label label-sale">
                          30% off
                        </span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>

                        <div className="product-countdown-container">
                          <span className="product-contdown-title">
                            offer ends in:
                          </span>
                          <div
                            className="product-countdown countdown-compact"
                            data-until="2019, 11, 3"
                            data-compact="true"
                          ></div>
                        </div>

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
                          <a href="#">Men’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">ASICS Tiger Gel-Lyte MT</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">Now $77.99</span>
                          <span className="old-price">$130.00</span>
                        </div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#af5f23" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#806f55" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Splendid Roselyn II</a>
                        </h3>
                        <div className="product-price">$97.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#78645f" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#b89474" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#666666" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">New</span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Sandals</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Eric Michael Sandra</a>
                        </h3>
                        <div className="product-price">$42.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Heels</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Jessica Simpson Blayke</a>
                        </h3>
                        <div className="product-price">$20.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#cc6666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ccccff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Men’s</a>,<a href="#">Sneakers</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Native Shoes Miles Denim Print
                          </a>
                        </h3>
                        <div className="product-price">$20.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-vl"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#ffca51" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#bb8379" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#666666" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            The North Face Raedonda Boot Sneaker
                          </a>
                        </h3>
                        <div className="product-price">$97.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Men’s</a>,<a href="#">Boots</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Vasque Sundowner GTX</a>
                        </h3>
                        <div className="product-price">$109.99</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">
                          Sale
                        </span>
                        <span className="product-label label-sale">
                          55% off
                        </span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Heels</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Marc Jacobs Somewhere Sport Sandal
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">Now $125.99</span>
                          <span className="old-price">$275.00</span>
                        </div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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

                  <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                    <div className="product product-3 text-center">
                      <figure className="product-media">
                        <span className="product-label label-primary">New</span>
                        <a href="product.html">
                          <img
                            src="images/demos/demo-10/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
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
                          <a href="#">Women’s</a>,<a href="#">Mules</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Crocs Crocband Clog</a>
                        </h3>
                        <div className="product-price">$25.75</div>
                      </div>

                      <div className="product-footer">
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="ratings-text">( 7 Reviews )</span>
                        </div>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
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
                </div>
              </div>
            </div>
          </div>

          <div className="more-container text-center mt-5">
            <a
              href="category.html"
              className="btn btn-outline-lightgray btn-more btn-round"
            >
              <span>View more products</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>

          <div className="mb-5">
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

            <div className="blog-posts">
              <div className="container">
                <h2 className="title-lg text-center mb-4">From Our Blog</h2>

                <div
                  className="owl-carousel owl-simple mb-4"
                  data-toggle="owl"
                  data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "520": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'
                >
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="images/demos/demo-10/blog/post-1.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>

                    <div className="entry-body text-center">
                      <div className="entry-meta">
                        <a href="#">Nov 22, 2018</a>, 0 Comments
                      </div>

                      <h3 className="entry-title">
                        <a href="single.html">Sed adipiscing ornare.</a>
                      </h3>

                      <div className="entry-content">
                        <p>
                          Phasellus hendrerit. Pellentesque aliquet nibh nec
                          urna. In nisi neque, aliquet vel, dapibus id, mattis
                          vel, nisi.{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="images/demos/demo-10/blog/post-2.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>

                    <div className="entry-body text-center">
                      <div className="entry-meta">
                        <a href="#">Dec 12, 2018</a>, 0 Comments
                      </div>

                      <h3 className="entry-title">
                        <a href="single.html">Fusce lacinia arcuet nulla.</a>
                      </h3>

                      <div className="entry-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh.{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="images/demos/demo-10/blog/post-3.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>

                    <div className="entry-body text-center">
                      <div className="entry-meta">
                        <a href="#">Dec 19, 2018</a>, 2 Comments
                      </div>

                      <h3 className="entry-title">
                        <a href="single.html">Aliquam erat volutpat.</a>
                      </h3>

                      <div className="entry-content">
                        <p>
                          Pellentesque aliquet nibh nec urna. In nisi neque,
                          aliquet vel, dapibus id, mattis vel, nisi.{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="images/demos/demo-10/blog/post-4.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>

                    <div className="entry-body text-center">
                      <div className="entry-meta">
                        <a href="#">Dec 19, 2018</a>, 2 Comments
                      </div>

                      <h3 className="entry-title">
                        <a href="single.html">Quisque a lectus.</a>
                      </h3>

                      <div className="entry-content">
                        <p>
                          Sed egestas, ante et vulputate volutpat, eros pede
                          semper est, vitae luctus metus libero eu augue.{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="more-container text-center mt-1">
                  <a
                    href="blog.html"
                    className="btn btn-outline-lightgray btn-more btn-round"
                  >
                    <span>View more articles</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
