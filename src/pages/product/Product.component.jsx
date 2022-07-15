import React,{ useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import Card from '../../components/products/Card.component';

const Product = () => {
    const {fakeDataApi, fakeImageApi} = React.useContext(AppContext);
    return (
        <>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            Showing <span>{fakeDataApi.length} of 56</span> Products
                                        </div>
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control">
                                                    <option value="popularity">Most Popular</option>{/* selected="selected" */}
                                                    <option value="rating">Most Rated</option>
                                                    <option value="date">Date</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="toolbox-layout">
                                            <a href="category-list.html" className="btn-layout">
                                                <svg width="16" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="10" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="10" height="4" />
                                                </svg>
                                            </a>

                                            <a href="category-2cols.html" className="btn-layout">
                                                <svg width="10" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                </svg>
                                            </a>

                                            <a href="category.html" className="btn-layout active">
                                                <svg width="16" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="12" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                    <rect x="12" y="6" width="4" height="4" />
                                                </svg>
                                            </a>

                                            <a href="category-4cols.html" className="btn-layout">
                                                <svg width="22" height="10">
                                                    <rect x="0" y="0" width="4" height="4" />
                                                    <rect x="6" y="0" width="4" height="4" />
                                                    <rect x="12" y="0" width="4" height="4" />
                                                    <rect x="18" y="0" width="4" height="4" />
                                                    <rect x="0" y="6" width="4" height="4" />
                                                    <rect x="6" y="6" width="4" height="4" />
                                                    <rect x="12" y="6" width="4" height="4" />
                                                    <rect x="18" y="6" width="4" height="4" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="products mb-3">
                                    <div className="row justify-content-center">
                                        {fakeDataApi.map((m)=>(
                                            <Card key={m.id} id={m.id} name={m.name} type={m.type} price={m.price} path={fakeImageApi} review={m.reviews} status={m.status}/>
                                        ))}
                                    </div>
                                </div>

                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link page-link-prev" href="#" aria-label="Previous" aria-disabled="true">{/* tabindex="-1" */}
                                                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item-total">of 6</li>
                                        <li className="page-item">
                                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">
                                    <div className="widget widget-clean">
                                        <label>Filters:</label>
                                        <a href="#" className="sidebar-filter-clear">Clean All</a>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                                Category
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-1">
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-1" />
                                                            <label className="custom-control-label" htmlFor="cat-1">Dresses</label>
                                                        </div>
                                                        <span className="item-count">3</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-2" />
                                                            <label className="custom-control-label" htmlFor="cat-2">T-shirts</label>
                                                        </div>
                                                        <span className="item-count">0</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-3" />
                                                            <label className="custom-control-label" htmlFor="cat-3">Bags</label>
                                                        </div>
                                                        <span className="item-count">4</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-4" />
                                                            <label className="custom-control-label" htmlFor="cat-4">Jackets</label>
                                                        </div>
                                                        <span className="item-count">2</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-5" />
                                                            <label className="custom-control-label" htmlFor="cat-5">Shoes</label>
                                                        </div>
                                                        <span className="item-count">2</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-6" />
                                                            <label className="custom-control-label" htmlFor="cat-6">Jumpers</label>
                                                        </div>
                                                        <span className="item-count">1</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-7" />
                                                            <label className="custom-control-label" htmlFor="cat-7">Jeans</label>
                                                        </div>
                                                        <span className="item-count">1</span>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-8" />
                                                            <label className="custom-control-label" htmlFor="cat-8">Sportwear</label>
                                                        </div>
                                                        <span className="item-count">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                                                Size
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-2">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-1" />
                                                            <label className="custom-control-label" htmlFor="size-1">XS</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-2" />
                                                            <label className="custom-control-label" htmlFor="size-2">S</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                        {/* defaultChecked */}
                                                            <input type="checkbox" className="custom-control-input" id="size-3" />
                                                            <label className="custom-control-label" htmlFor="size-3">M</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-4" />
                                                            <label className="custom-control-label" htmlFor="size-4">L</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-5" />
                                                            <label className="custom-control-label" htmlFor="size-5">XL</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-6" />
                                                            <label className="custom-control-label" htmlFor="size-6">XXL</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                                                Colour
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-3">
                                            <div className="widget-body">
                                                <div className="filter-colors">
                                                    <a href="#" style={{ background: "#b87145" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#f0c04a" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#333333" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" className="selected" style={{ background: "#cc3333" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#3399cc" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#669933" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#f2719c" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#ebebeb" }}><span className="sr-only">Color Name</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                                                Brand
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-4">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-1" />
                                                            <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-2" />
                                                            <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-3" />
                                                            <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-4" />
                                                            <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-5" />
                                                            <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-6" />
                                                            <label className="custom-control-label" htmlFor="brand-6">F&F</label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-7" />
                                                            <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                Price
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-5">
                                            <div className="widget-body">
                                                <div className="filter-price">
                                                    <div className="filter-price-text">
                                                        Price Range:
                                                        <span id="filter-price-range"></span>
                                                    </div>

                                                    <div id="price-slider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Product;