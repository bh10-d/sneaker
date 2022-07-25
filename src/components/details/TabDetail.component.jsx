import { useState } from 'react';



const Description = ({ data }) => {
    return (
        <>
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
        </>
    )
}


const AdditionalInformation = ({ data }) => {
    return (
        <>
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
        </>
    )
}

const ShippingReturns = ({ data }) => {
    return (
        <>
            <div className="product-desc-content">
                <div className="container">
                    <h3>Delivery & returns</h3>
                    <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                </div>
            </div>
        </>
    )
}

const Reviews = ({ data }) => {
    const [reply, setReply] = useState(false);
    const rank = (star) => {
        if (star == 0) {
            return 'Very bad';
        }
        if (star == 1) {
            return 'Bad';
        }
        if (star == 2) {
            return 'Not Bad';
        }
        if (star == 3) {
            return 'Not Good';
        }
        if (star == 4) {
            return 'Good';
        }
        if (star == 5) {
            return 'Very Good';
        }
    }

    const star = (star) => {
        return (
            <div className="ratings-val" style={{ width: `${(star / 5) * 100}%` }}></div>
        )
    }


    return (
        <>
            <div className="reviews">
                <div className="container">
                    <h3>Reviews ({data.length})</h3>
                    {/* <div className="review">
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
                    </div> */}
                    {data.map(cmt => (
                        <div className="review" key={cmt.comment_id}>
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <h4><a href="#">John Doe</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            {star(cmt.star)}

                                        </div>
                                    </div>
                                    <span className="review-date">5 days ago</span>
                                </div>
                                <div className="col">
                                    <h4>{rank(cmt.star)}</h4>
                                    <div className="review-content">
                                        <p>{cmt.comment}</p>
                                    </div>

                                    <div className="review-action">
                                        <Comment />
                                    </div>
                                    <div className="sub_comment" style={{ marginLeft: '20px' }}>
                                        <h4><a href="#">Bui Duc Hieu</a></h4>
                                        {/* <div className="ratings-container">
                                            <div className="ratings">
                                                {star(cmt.star)}
                                            </div>
                                        </div> */}
                                        <span className="review-date">5 days ago</span>
                                        <div className="col">
                                            <h4>{rank(cmt.star)}</h4>
                                            <div className="review-content">
                                                <p>{cmt.comment}</p>
                                            </div>

                                            <div className="review-action">
                                                <Comment />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const Comment = () => {
    const [reply, setReply] = useState(false);

    const handleSubmit = (data) => {
        console.log("ahsdkjagsd")
    }


    return (
        <>
            {(reply) ? (
                <div>
                    <div style={{ position: 'relative' }}><span style={{ color: 'black', cursor: 'pointer' }}><i className="fa-solid fa-reply"></i>phản hồi John Doe</span><span style={{ position: 'absolute', right: '0', cursor: 'pointer' }} onClick={() => setReply(false)}>Huỷ</span></div>
                    <div>
                        <div style={{ width: '100%', height: '100px' }}>
                            <h4>John Doe</h4>
                            <div className="ratings-container" style={{ paddingTop: '0px' }}>
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: `0%` }}></div>
                                </div>
                            </div>
                            <div sytle={{ position: 'relative' }}>
                                <textarea style={{ width: '100%', height: '52px', position: 'absolute', border: 'none', backgroundColor: 'rgba(246, 250, 247, 1)' }}></textarea>
                                <button style={{ position: 'absolute', right: '0', top: '78%', border: 'none', color: 'black', background: 'transparent' }} onClick={handleSubmit}><i className="fa-solid fa-turn-down-left"></i>Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <span style={{ color: 'black', cursor: 'pointer' }} onClick={() => setReply(true)}><i className="fa-solid fa-reply"></i>phản hồi John Doe</span>
            )}
        </>
    )
}

const TabDetail = ({ tab, data }) => {
    if (tab == 'Description') {
        return (<Description data={data} />)
    }
    if (tab == 'Additional information') {
        return (<AdditionalInformation data={data} />)
    }
    if (tab == 'Shipping & Returns') {
        return (<ShippingReturns data={data} />)
    }
    if (tab == 'Reviews') {
        return (<Reviews data={data} />)
    }
}

export default TabDetail; 