import { Link } from 'react-router-dom';
const List_Object = [
    {
        title: "Women's",
        subtitle: "125 Products",
        image: "/images/demos/demo-10/banners/banner-5.jpg"
    },
    {
        title: "Men's",
        subtitle: "97 Products",
        image: "/images/demos/demo-10/banners/banner-6.jpg"
    },
    {
        title: "Kid's",
        subtitle: "48 Products",
        image: "/images/demos/demo-10/banners/banner-7.jpg"
    },
]

const BannerObject = () => {

    return (
        <>
            {List_Object.map(ob => (
                <div className="col-sm-6 col-md-4" key={ob.image}>
                    <div className="banner banner-cat">
                        <Link to="/product">
                            <img
                                src={`${ob.image}`}
                                alt="Banner"
                            />
                        </Link>

                        <div className="banner-content banner-content-overlay text-center">
                            <h3 className="banner-title font-weight-normal">{ob.title}</h3>
                            <h4 className="banner-subtitle">{ob.subtitle}</h4>
                            <Link to="/product" className="banner-link">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BannerObject;