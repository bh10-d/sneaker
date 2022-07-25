import React, { useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import CardDetail from '../../components/details/CardDetail.component';
import TabDetail from '../../components/details/TabDetail.component';
import Card from '../../components/products/Card.component';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const tabs = ["Description", "Additional information", "Shipping & Returns", "Reviews"];

const Detail = () => {
    const { addProductCart, fakeDataApi, fakeImageApi, fakeSize, fakeComments } = React.useContext(AppContext);
    let { id, image } = useParams();
    const [imageColor, setImageColor] = useState(image);
    const [size, setSize] = useState('');
    const [active, setActive] = useState(imageColor);
    const [type, setType] = useState("Description");

    let getProduct = () => {
        let newArr = fakeDataApi.filter(f => f.id === id)
        newArr = { ...newArr[0], size }
        return newArr;
    }

    const handleClick = (e) => {
        const path = e.target.src.split(/\//)
        setImageColor(path[path.length - 1]);
        setActive(path[path.length - 1]);
        setSize('');
    }

    const getSize = (e) => {
        setSize(e.target.value)
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
                                {/* truyen id anh vao day de thay doi anh mo ta hien thi */}
                                <CardDetail idProduct={id} imageFirst={imageColor} />
                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h1 className="product-title">{getProduct(id).name}</h1>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }}></div>
                                            </div>
                                            <a className="ratings-text" href="#product-review-link" id="review-link">( {getProduct(id).reviews} Reviews )</a>
                                        </div>

                                        <div className="product-price">
                                            ${getProduct(id).price}
                                        </div>

                                        <div className="product-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label>Color:</label>

                                            <div className="product-nav product-nav-thumbs" >
                                                {fakeImageApi.map(m => {
                                                    if (m.id === id) {
                                                        return (<span key={m.path + m.image_color} className={m.image_color === active ? 'active' : ""} onClick={handleClick}><img src={`/images/image_products/${m.image_color}`} /></span>)
                                                    }
                                                })}
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="size">Size:</label>
                                            <div className="select-custom">
                                                <select name="size" id="size" className="form-control" onChange={getSize}>
                                                    <option value="#" select="selected">Select a size</option>
                                                    {fakeSize.map((m, index) => {
                                                        if (m.image_color === imageColor) {
                                                            return (<option key={index + m.image_color} value={m.size}>{m.size}</option>)
                                                        }
                                                    })}
                                                </select>
                                            </div>

                                            {/* <a href="#" className="size-guide"><i className="icon-th-list"></i>size guide</a> */}
                                        </div>

                                        <div className="details-filter-row details-row-size" style={{ visibility: 'hidden' }}>
                                            <label htmlFor="qty">Qty:</label>
                                            <div className="product-details-quantity">
                                                <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max="10" step="1" data-decimals="0" required />
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <span href="#" className="btn-product btn-cart"
                                                onClick={() => {
                                                    addProductCart(getProduct(), imageColor);
                                                    // setSize('')
                                                }}
                                            ><span>add to cart</span></span>

                                            <div className="details-action-wrapper">
                                                <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                {/* <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a> */}
                                            </div>
                                        </div>

                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Category:</span>
                                                <a href="#">{getProduct(id).type}</a>
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
                                {tabs.map((tab, index) => (
                                    <li
                                        key={index}
                                        className="nav-item"
                                        onClick={() => { setType(tab) }}
                                    >
                                        <span
                                            style={{ cursor: "pointer" }}
                                            className={
                                                tab === type ? `nav-link active` : "nav-link"
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
                            <TabDetail tab={type} data={fakeComments} />
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="title text-center mb-4">You May Also Like</h2>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false
                            }}
                            modules={[Navigation, Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {fakeDataApi.map((m) => (
                                <SwiperSlide key={m.id}>
                                    <Card id={m.id} name={m.name} type={m.type} price={m.price} path={fakeImageApi} review={m.reviews} status={m.status} className={'none'} />
                                </SwiperSlide>
                            ))}
                            <SwiperSlide>
                                asd
                            </SwiperSlide>
                            <SwiperSlide>
                                jwjjqkwe
                            </SwiperSlide>
                            <SwiperSlide>
                                accv,mbn
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Detail;