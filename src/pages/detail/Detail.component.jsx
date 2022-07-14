import React, { useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/details/CardDetail.component';

const Detail = () => {
    const { addProductCart, fakeDataApi, fakeImageApi } = React.useContext(AppContext);
    let { id } = useParams();
    const [image, setColor] = useState(fakeImageApi.find((m) => m.id === id).path);

    let getProduct = () => {
        let newArr = fakeDataApi.filter(f => f.id === id)
        return newArr;
    }

    const handleClick = (e) => {
        setColor(e.target.innerText)
        console.log(e)
        console.log(e.target.innerText)
    }

    return (
        <>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Products</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Extended Description</li>
                        </ol>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabIndex="-1">
                                <i className="icon-angle-left"></i>
                                <span>Prev</span>
                            </a>

                            <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex="-1">
                                <span>Next</span>
                                <i className="icon-angle-right"></i>
                            </a>
                        </nav>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="product-gallery">
                                        <figure className="product-main-image">
                                            <img id="product-zoom" src="images/products/single/extended/3.jpg" data-zoom-image="images/products/single/extended/3-big.jpg" alt="product image" />

                                            <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                                <i className="icon-arrows"></i>
                                            </a>
                                        </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            <a className="product-gallery-item" href="#" data-image="images/products/single/extended/1.jpg" data-zoom-image="images/products/single/extended/1-big.jpg">
                                                <img src="images/products/single/extended/1-small.jpg" alt="product side" />
                                            </a>

                                            <a className="product-gallery-item" href="#" data-image="images/products/single/extended/2.jpg" data-zoom-image="images/products/single/extended/2-big.jpg">
                                                <img src="images/products/single/extended/2-small.jpg" alt="product cross" />
                                            </a>

                                            <a className="product-gallery-item active" href="#" data-image="images/products/single/extended/3.jpg" data-zoom-image="images/products/single/extended/3-big.jpg">
                                                <img src="images/products/single/extended/3-small.jpg" alt="product with model" />
                                            </a>

                                            <a className="product-gallery-item" href="#" data-image="images/products/single/extended/4.jpg" data-zoom-image="images/products/single/extended/4-big.jpg">
                                                <img src="images/products/single/extended/4-small.jpg" alt="product back" />
                                            </a>

                                        </div>
                                    </div>
                                </div> */}
                                {/* truyen id anh vao day de thay doi anh mo ta hien thi */}
                                <CardDetail idProduct={id} imageFirst={fakeImageApi.find((m) => m.id === id).path} />
                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h1 className="product-title">{getProduct(id)[0].name}</h1>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }}></div>
                                            </div>
                                            <a className="ratings-text" href="#product-review-link" id="review-link">( {getProduct(id)[0].reviews} Reviews )</a>
                                        </div>

                                        <div className="product-price">
                                            ${getProduct(id)[0].price}
                                        </div>

                                        <div className="product-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label>Color:</label>

                                            <div className="product-nav product-nav-dots" >
                                                {/* <a href="#" className="active" style={{ background: "#eab656" }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: "#333333" }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: "#3a588b" }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: "#caab97" }}><span className="sr-only">Color name</span></a> */}
                                                {fakeImageApi.map(m => {
                                                    if (m.id === id) {
                                                        return (<span key={m.path} onClick={handleClick} style={{ background: "#333333" }}><span className="sr-only">{m.path}</span></span>)
                                                    }
                                                })}
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="size">Size:</label>
                                            <div className="select-custom">
                                                <select name="size" id="size" className="form-control">
                                                    <option value="#" select="selected">Select a size</option>
                                                    <option value="s">Small</option>
                                                    <option value="m">Medium</option>
                                                    <option value="l">Large</option>
                                                    <option value="xl">Extra Large</option>
                                                </select>
                                            </div>

                                            <a href="#" className="size-guide"><i className="icon-th-list"></i>size guide</a>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="qty">Qty:</label>
                                            <div className="product-details-quantity">
                                                <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max="10" step="1" data-decimals="0" required />
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <span href="#" className="btn-product btn-cart"
                                                onClick={() => {
                                                    addProductCart(getProduct()[0], { image });
                                                }}
                                            ><span>add to cart</span></span>

                                            <div className="details-action-wrapper">
                                                <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                                            </div>
                                        </div>

                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Category:</span>
                                                <a href="#">{getProduct(id)[0].type}</a>
                                            </div>

                                            <div className="social-icons social-icons-sm">
                                                <span className="social-label">Share:</span>
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-details-tab product-details-extended">
                        <div className="container">
                            <ul className="nav nav-pills justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                <div className="product-desc-content">
                                    <div className="product-desc-row bg-image" style={{ backgroundImage: "url('/images/products/single/extended/bg-1.jpg')" }}>
                                        <div className="container">
                                            <div className="row justify-content-end">
                                                <div className="col-sm-6 col-lg-4">
                                                    <h2>Product Information</h2>
                                                    <ul>
                                                        <li>Faux suede fabric upper</li>
                                                        <li>Tie strap buckle detail</li>
                                                        <li>Block heel</li>
                                                        <li>Open toe</li>
                                                        <li>Heel Height: 7cm / 2.5 inches</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-desc-row bg-image text-white" style={{ backgroundImage: "url('/images/products/single/extended/bg-2.jpg')" }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h2>Design</h2>
                                                    <p>The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. </p>
                                                </div>

                                                <div className="col-md-6">
                                                    <h2>Fabric & care</h2>
                                                    <p>As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village.</p>
                                                </div>
                                            </div>

                                            <div className="mb-5"></div>

                                            <img src="/images/products/single/extended/sign.png" alt="" className="ml-auto mr-auto" />
                                        </div>
                                    </div>

                                    <div className="product-desc-row bg-image" style={{ backgroundImage: "url('/images/products/single/extended/bg-3.jpg')" }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <blockquote>
                                                        <p>“ Everything is important - <br />that success is in the details. ”</p>

                                                        <cite>– Steve Jobs</cite>
                                                    </blockquote>
                                                    <p>Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <div className="container">
                                        <h3>Information</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                        <h3>Fabric & care</h3>
                                        <ul>
                                            <li>Faux suede fabric</li>
                                            <li>Gold tone metal hoop handles.</li>
                                            <li>RI branding</li>
                                            <li>Snake print trim interior </li>
                                            <li>Adjustable cross body strap</li>
                                            <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                        </ul>

                                        <h3>Size</h3>
                                        <p>one size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <div className="container">
                                        <h3>Delivery & returns</h3>
                                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                                            We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                <div className="reviews">
                                    <div className="container">
                                        <h3>Reviews (2)</h3>
                                        <div className="review">
                                            <div className="row no-gutters">
                                                <div className="col-auto">
                                                    <h4><a href="#">Samanta J.</a></h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: "80%" }}></div>
                                                        </div>
                                                    </div>
                                                    <span className="review-date">6 days ago</span>
                                                </div>
                                                <div className="col">
                                                    <h4>Good, perfect size</h4>

                                                    <div className="review-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                    </div>

                                                    <div className="review-action">
                                                        <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                        <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="review">
                                            <div className="row no-gutters">
                                                <div className="col-auto">
                                                    <h4><a href="#">John Doe</a></h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: "100%" }}></div>
                                                        </div>
                                                    </div>
                                                    <span className="review-date">5 days ago</span>
                                                </div>
                                                <div className="col">
                                                    <h4>Very good</h4>

                                                    <div className="review-content">
                                                        <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                    </div>

                                                    <div className="review-action">
                                                        <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                        <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <h2 className="title text-center mb-4">You May Also Like</h2>
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                            data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
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
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
                            <div className="product product-7">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img src="/images/products/product-4.jpg" alt="Product image" className="product-image" />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Brown paperbag waist <br />pencil skirt</a></h3>
                                    <div className="product-price">
                                        $60.00
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "20%" }}></div>
                                        </div>
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{ background: "#cc9966" }}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{ background: "#7fc5ed" }}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{ background: "#e8c97a" }}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-7">
                                <figure className="product-media">
                                    <span className="product-label label-out">Out of Stock</span>
                                    <a href="product.html">
                                        <img src="/images/products/product-6.jpg" alt="Product image" className="product-image" />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Jackets</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                                    <div className="product-price">
                                        <span className="out-price">$120.00</span>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "80%" }}></div>
                                        </div>
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-7">
                                <figure className="product-media">
                                    <span className="product-label label-top">Top</span>
                                    <a href="product.html">
                                        <img src="/images/products/product-11.jpg" alt="Product image" className="product-image" />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Shoes</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Light brown studded Wide fit wedges</a></h3>
                                    <div className="product-price">
                                        $110.00
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "80%" }}></div>
                                        </div>
                                        <span className="ratings-text">( 1 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{ background: "#8b513d" }}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{ background: "#d2b99a" }}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-7">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="images/products/product-10.jpg" alt="Product image" className="product-image" />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Jumpers</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>
                                    <div className="product-price">
                                        $56.00
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "0%" }}></div>
                                        </div>
                                        <span className="ratings-text">( 0 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-7">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="/images/products/product-7.jpg" alt="Product image" className="product-image" />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Jeans</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>
                                    <div className="product-price">
                                        $76.00
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "20%" }}></div>
                                        </div>
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Detail;