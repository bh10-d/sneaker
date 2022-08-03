import SideBar from '../../components/user/SideBar.component';




const Order = ()=>{

    return (
        <>
            <div className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <SideBar/>
                            <div className="col-9">
                                <div className="order_product_tab">
                                    <p className="">Tab1</p>
                                    <p className="tab-active">Tab2</p>
                                </div>
                                <div style={{ backgroundColor: '#c96' }}>
                                    <div className="order_product">
                                        <div className="order_product_header">
                                            <p>#OD123456</p>
                                            <p>Bui Duc Hieu</p>
                                            <p>1/8/2022</p>
                                        </div>
                                        <div className="order_product_body">
                                            <img src="/images/team/about-2/buiduchieu.jpg" alt="anh san pham" />
                                            <div>
                                                <p>ten san pham</p>
                                                <span title="Price">$10</span> <span title="Quantity"> x10</span>
                                            </div>
                                            <button>
                                                detail
                                            </button>
                                        </div>
                                    </div>
                                    <div className="order_product">
                                        <div className="order_product_header">
                                            <p>#OD123456</p>
                                            <p>Bui Duc Hieu</p>
                                            <p>1/8/2022</p>
                                        </div>
                                        <div className="order_product_body">
                                            <img src="/images/team/about-2/buiduchieu.jpg" alt="anh san pham" />
                                            <div>
                                                <p>ten san pham</p>
                                                <span title="Price">$10</span> <span title="Quantity"> x10</span>
                                            </div>
                                            <button>
                                                detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;