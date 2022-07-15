import React, { useState } from 'react';
import { AppContext } from '../../context/AppProvider';

const CardDetail = ({ idProduct, imageFirst }) => {
    const { fakeImageApi } = React.useContext(AppContext);
    const [image, setImage] = useState(imageFirst) //'/images/products/single/extended/3.jpg'

    // console.log(idProduct)
    // console.log(fakeImageApi)
    let getProduct = (idProduct) => {
        let newArr = fakeImageApi.filter(f => f.id === idProduct)
        // console.log(newArr);
        return newArr;
    }

    const handleClick = (e) => {
        console.log(e.target.src);
        setImage(e.target.src)
    }

    return (
        <>
            <div className="col-md-6">
                <div className="product-gallery">
                    <figure className="product-main-image">
                        <img id="product-zoom" src={image} alt="product image" />

                        {/* <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                            <i className="icon-arrows"></i>
                        </a> */}
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                        {getProduct(idProduct).map(m => (
                            <span key={m.path} className="product-gallery-item" onClick={handleClick}>
                                <img src={m.path} alt="product side" />
                            </span>
                        ))}
                        {/* <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/1-big.jpg" alt="product side" />
                        </span>

                        <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/2-big.jpg" alt="product cross" />
                        </span>

                        <span className="product-gallery-item active" onClick={handleClick}>
                            <img src="images/products/single/extended/3-big.jpg" alt="product with model" />
                        </span>

                        <span className="product-gallery-item" onClick={handleClick}>
                            <img src="images/products/single/extended/4-big.jpg" alt="product back" />
                        </span> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default CardDetail;