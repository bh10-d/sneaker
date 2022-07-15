import {Link, useLocation} from 'react-router-dom';
import Cart from '../cart/Cart.component';



const list = [
    {
        id: 1,
        content: 'Home',
        class: 'sf-with-ul',
        link: '/'
    },
    {
        id: 2,
        content: 'Shop',
        class: 'sf-with-ul',
        link: '/shop'
    },
    {
        id: 3,
        content: 'Product',
        class: 'sf-with-ul',
        link: '/product'
    },
    {
        id: 4,
        content: 'Pages',
        class: 'sf-with-ul',
        link: '/pages'
    },
    {
        id: 5,
        content: 'Blog',
        class: 'sf-with-ul',
        link: '/blog'
    },
    {
        id: 6,
        content: 'Elements',
        class: 'sf-with-ul',
        link: '/elements'
    },
]

const ChildNav = ({ props }) => {
    return (
        <>
            {/* <li className="megamenu-container active">
                <a href="index.html" className="sf-with-ul">Home</a>
            </li> */}
            <li key={props.id}>
                <a href={props.link} className={props.class}>{props.content}</a>
            </li>
        </>
    )

}

const NavBar = () => {
    let location = useLocation();
    // console.log(useLocation())
    return (
        <>
            <div className="header-right">
                <nav className="main-nav">
                    <ul className="menu sf-arrows">
                        {/* {list.map(m=><ChildNav props={m}/>)} */}
                        <li className={`megamenu-container ${(location.pathname === '/')?'active':''}`}>
                            <Link to="/" className="sf-with-ul">Home</Link>

                            {/* <div className="megamenu demo">
                                <div className="menu-col">
                                    <div className="menu-title">Choose your demo</div>

                                    <div className="demo-list">
                                        <div className="demo-item">
                                            <a href="index-1.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/1.jpg)" }}></span>
                                                <span className="demo-title">01 - furniture store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-2.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/2.jpg)" }}></span>
                                                <span className="demo-title">02 - furniture store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-3.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/3.jpg)" }}></span>
                                                <span className="demo-title">03 - electronic store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-4.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/4.jpg)" }}></span>
                                                <span className="demo-title">04 - electronic store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-5.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/5.jpg)" }}></span>
                                                <span className="demo-title">05 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-6.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/6.jpg)" }}></span>
                                                <span className="demo-title">06 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-7.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/7.jpg)" }}></span>
                                                <span className="demo-title">07 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-8.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/8.jpg)" }}></span>
                                                <span className="demo-title">08 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-9.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/9.jpg)" }}></span>
                                                <span className="demo-title">09 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item">
                                            <a href="index-10.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/10.jpg)" }}></span>
                                                <span className="demo-title">10 - shoes store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-11.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/11.jpg)" }}></span>
                                                <span className="demo-title">11 - furniture simple store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-12.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/12.jpg)" }}></span>
                                                <span className="demo-title">12 - fashion simple store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-13.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/13.jpg)" }}></span>
                                                <span className="demo-title">13 - market</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-14.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/14.jpg)" }}></span>
                                                <span className="demo-title">14 - market fullwidth</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-15.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/15.jpg)" }}></span>
                                                <span className="demo-title">15 - lookbook 1</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-16.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/16.jpg)" }}></span>
                                                <span className="demo-title">16 - lookbook 2</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-17.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/17.jpg)" }}></span>
                                                <span className="demo-title">17 - fashion store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-18.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/18.jpg)" }}></span>
                                                <span className="demo-title">18 - fashion store (with sidebar)</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-19.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/19.jpg)" }}></span>
                                                <span className="demo-title">19 - games store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-20.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/20.jpg)" }}></span>
                                                <span className="demo-title">20 - book store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-21.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/21.jpg)" }}></span>
                                                <span className="demo-title">21 - sport store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-22.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/22.jpg)" }}></span>
                                                <span className="demo-title">22 - tools store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-23.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/23.jpg)" }}></span>
                                                <span className="demo-title">23 - fashion left navigation store</span>
                                            </a>
                                        </div>

                                        <div className="demo-item hidden">
                                            <a href="index-24.html">
                                                <span className="demo-bg" style={{ backgroundImage: "url(images/menu/demos/24.jpg)" }}></span>
                                                <span className="demo-title">24 - extreme sport store</span>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="megamenu-action text-center">
                                        <a href="#" className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i className="icon-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                        {/* <li>
                            <Link to="/category" className="sf-with-ul">Shop</Link>

                            <div className="megamenu megamenu-md">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="menu-col">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="menu-title">Shop with sidebar</div>
                                                    <ul>
                                                        <li><a href="category-list.html">Shop List</a></li>
                                                        <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                                        <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                                        <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                                        <li><a href="category-market.html"><span>Shop Market<span className="tip tip-new">New</span></span></a></li>
                                                    </ul>

                                                    <div className="menu-title">Shop no sidebar</div>
                                                    <ul>
                                                        <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                                        <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="menu-title">Product Category</div>
                                                    <ul>
                                                        <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                                        <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                                    </ul>
                                                    <div className="menu-title">Shop Pages</div>
                                                    <ul>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="dashboard.html">My Account</a></li>
                                                        <li><a href="#">Lookbook</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="banner banner-overlay">
                                            <a href="category.html" className="banner banner-menu">
                                                <img src="images/menu/banner-1.jpg" alt="Banner" />

                                                <div className="banner-content banner-content-top">
                                                    <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        <li className={`${(location.pathname === '/product')?'active':''}`}>
                            <Link to="/product" className="sf-with-ul">Product</Link>

                            {/* <div className="megamenu megamenu-sm">
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div className="menu-col">
                                            <div className="menu-title">Product Details</div>
                                            <ul>
                                                <li><a href="product.html">Default</a></li>
                                                <li><a href="product-centered.html">Centered</a></li>
                                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                                <li><a href="product-gallery.html">Gallery</a></li>
                                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="banner banner-overlay">
                                            <a href="category.html">
                                                <img src="images/menu/banner-2.jpg" alt="Banner" />

                                                <div className="banner-content banner-content-bottom">
                                                    <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                        <li className={`${(location.pathname === '/page')?'active':''}`}>
                            <Link to="/page" className="sf-with-ul">Pages</Link>

                            <ul>
                                <li>
                                    <Link to="/about" className="sf-with-ul">About</Link>

                                    <ul>
                                        <li><a href="about.html">About 01</a></li>
                                        <li><a href="about-2.html">About 02</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact" className="sf-with-ul">Contact</Link>

                                    <ul>
                                        <li><Link to="/contact">Contact 01</Link></li>
                                        <li><Link to="/contact-2">Contact 02</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="/404">Error 404</Link></li>
                                <li><Link to="/coming-soon">Coming Soon</Link></li>
                            </ul>
                        </li>
                        <li className={`${(location.pathname === '/blog')?'active':''}`}>
                            <Link to="/blog" className="sf-with-ul">Blog</Link>

                            <ul>
                                <li><a href="blog.html">Classic</a></li>
                                <li><a href="blog-listing.html">Listing</a></li>
                                <li>
                                    <a href="#">Grid</a>
                                    <ul>
                                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Masonry</a>
                                    <ul>
                                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Mask</a>
                                    <ul>
                                        <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                        <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Single Post</a>
                                    <ul>
                                        <li><a href="single.html">Default with sidebar</a></li>
                                        <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                        <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <Link to="/elements-list" className="sf-with-ul">Elements</Link>

                            <ul>
                                <li><a href="elements-products.html">Products</a></li>
                                <li><a href="elements-typography.html">Typography</a></li>
                                <li><a href="elements-titles.html">Titles</a></li>
                                <li><a href="elements-banners.html">Banners</a></li>
                                <li><a href="elements-product-category.html">Product Category</a></li>
                                <li><a href="elements-video-banners.html">Video Banners</a></li>
                                <li><a href="elements-buttons.html">Buttons</a></li>
                                <li><a href="elements-accordions.html">Accordions</a></li>
                                <li><a href="elements-tabs.html">Tabs</a></li>
                                <li><a href="elements-testimonials.html">Testimonials</a></li>
                                <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                <li><a href="elements-portfolio.html">Portfolio</a></li>
                                <li><a href="elements-cta.html">Call to Action</a></li>
                                <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </nav>

                <div className="header-search">
                    <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                    <form action="#" method="get">
                        <div className="header-search-wrapper">
                            <label htmlFor="q" className="sr-only">Search</label>
                            <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                        </div>
                    </form>
                </div>
                <Cart />
            </div>
        </>
    )
}

export default NavBar;