import { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SideBar = () => {
    const [showcate, setShowcate] = useState(true);
    const [showsize, setShowsize] = useState(true);
    const [showbrand, setShowbrand] = useState(true);

    function log(value) {
        console.log(value); //eslint-disable-line
      }

    return (
        <>
            <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop">
                    <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="#" className="sidebar-filter-clear">Clean All</a>
                    </div>

                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a onClick={() => setShowcate(!showcate)} style={{ cursor: 'pointer' }}>
                                Category
                            </a>
                        </h3>

                        <div className={`collapse ${(showcate) ? 'show' : ''}`} id="widget-1">
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
                            <a onClick={() => setShowsize(!showsize)} style={{ cursor: 'pointer' }}>
                                Size
                            </a>
                        </h3>

                        <div className={`collapse ${(showsize) ? "show" : ""}`} id="widget-2">
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

                    {/* <div className="widget widget-collapsible">
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
                                    </div> */}

                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a onClick={() => setShowbrand(!showbrand)} style={{ cursor: "pointer" }}>
                                Brand
                            </a>
                        </h3>

                        <div className={`collapse ${(showbrand) ? "show" : ""}`} id="widget-4">
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
                                        <p>Price Range:</p>
                                        <span id="filter-price-range"></span>
                                        <Slider 
                                            range
                                            step={20}
                                            // count={1}
                                            defaultValue={[20, 40]}
                                            onChange={log}
                                            // pushable
                                            // trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
                                            // handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
                                            // railStyle={{ backgroundColor: 'black' }}
                                        />
                                        {/* <Range /> */}
                                    </div>

                                    <div id="price-slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </aside>
        </>
    )
}

export default SideBar;