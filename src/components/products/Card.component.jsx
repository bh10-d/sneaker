import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';

const Status = ({ status }) => {

    if (status == 'new') {
        return (<span className="product-label label-new">New</span>)
    }

    if (status == 'top') {
        return (<span className="product-label label-top">Top</span>)
    }

    if (status == 'out') {
        return (<span className="product-label label-out">Out of stock</span>)
    }

}

const Card = (props) => {
    const {addProductCart} = React.useContext(AppContext);
    const [image, setImage] = useState((props.path.find(m => m.id === props.id)).path)
    // console.log(props.path.find(m => m.id == props.id))
    const handleClick = (e)=>{
        setImage(e.target.src)
    }

    // console.log(props.path)
    return (
        <>
            <div className="col-6 col-md-4 col-lg-4" key={props.id}>
                <div className="product product-7 text-center">
                    <figure className="product-media">
                        <Status status={props.status} />

                        <Link to="/detail">
                            
                            <img src={image} alt={props.name} className="product-image" />
                        </Link>

                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                            <span className="btn-product btn-cart" onClick={()=>{addProductCart(props)}}><span>add to cart</span></span>
                        </div>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            <a href="#">{props.type}</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">{props.name}</a></h3>
                        <div className="product-price">
                            ${props.price}
                        </div>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: "20%" }}></div>
                            </div>
                            <span className="ratings-text">( {props.review} Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-thumbs">
                            {/* <a href="#" className="active">
                                <img src="images/products/product-4-thumb.jpg" alt="product desc" />
                            </a>
                            <a href="#">
                                <img value={2} src="images/products/product-4-2-thumb.jpg" alt="product desc" />
                            </a>

                            <a href="#">
                                <img src="images/products/product-4-3-thumb.jpg" alt="product desc" />
                            </a> */}
                            {(props.path!==undefined)?
                            props.path.map((m, i) => {
                                if (m.id == props.id) {
                                    return (
                                        <span key={i} href="#" onClick={handleClick}>
                                            <img src={m.path} alt="product desc" />
                                        </span>
                                    )
                                }else{
                                    return (
                                        ''
                                    )
                                }
                            }):<></>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;