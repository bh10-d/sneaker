import { Link } from 'react-router-dom';

const Element = (props) => {

    // (function test(){
    //     const check = localStorage.getItem('sneakershop')
    //     if(check!==''){
    //         const JobsLocalStorage = JSON.parse(localStorage.getItem('sneakershop'))
    //         console.log(JobsLocalStorage)
    //         return JobsLocalStorage ?? []
    //     }else{
    //         localStorage.removeItem('sneakershop')
    //         return []
    //     }
    // })();
    console.log(props)

    return (
        <>
            {props.data.map((product,i) => (
                <div className="product" key={i}>
                    <div className="product-cart-details">
                        <h4 className="product-title">
                            <Link to={`/detail/${product.image}/${product.id}`}>{product.name}</Link>
                        </h4>

                        <span className="cart-product-info">
                            <span className="cart-product-qty">{product.quantity}</span>
                            x ${product.price}
                        </span>
                    </div>

                    <figure className="product-image-container">
                        <Link to="/product" className="product-image">
                            <img src={`/images/image_products/${product.image}`} alt="product" />
                        </Link>
                    </figure>
                    <span onClick={props.delete} className="btn-remove" title="Remove Product"><i id={product.image} className="icon-close"></i></span>
                </div>
            ))}
        </>
    )
}


export default Element;