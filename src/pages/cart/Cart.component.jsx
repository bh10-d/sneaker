import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo, useContext, useEffect } from "react";
import { get, url } from "../../utils/request";
import { AppContext } from "../../context/AppProvider";
import Select from "../../components/cart/Select.component";
import Swal from "sweetalert2";
const Cart = () => {
  const { sizes, auth, voucher } = useContext(AppContext);
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    const check = localStorage.getItem("sneakershop");
    if (check !== "") {
      const JobsLocalStorage = JSON.parse(localStorage.getItem("sneakershop"));
      sizes.map((m) => {
        const index = JobsLocalStorage.findIndex(
          (f) =>
            f.size == m.size_id &&
            f.image == m.image_color &&
            f.quantity > m.quantity
        );
        if (index !== -1) {
          console.log(m.quantity + " " + index);
          JobsLocalStorage[index].quantity = m.quantity;
          const jsonProducts = JSON.stringify(JobsLocalStorage);
          localStorage.setItem("sneakershop", jsonProducts);
          // return JobsLocalStorage ?? [];
        }
      });
      return JobsLocalStorage ?? [];
    } else {
      localStorage.removeItem("sneakershop");
      return [];
    }
  });
  const handleChange = (currSize, size, image) => {
    const index = data.findIndex((m) => m.image == image && m.size == currSize); // current index
    const nextIndex = data.findIndex((m) => m.image == image && m.size == size); //next index
    const check = data.filter(
      (product) => product.image == image && product.size == size
    ); // check so luong phan tu
    if (check.length != 0) {
      localStorage.removeItem("sneakershop");
      const currQuantity = data[index].quantity;
      data[nextIndex].quantity += currQuantity;
      data.splice(index, 1);
      const afterEdit = [...data];
      setData(afterEdit);
      const jsonProducts = JSON.stringify(afterEdit);
      localStorage.setItem("sneakershop", jsonProducts);
    } else {
      data[index].size = size;
      const jsonProducts = JSON.stringify(data);
      localStorage.setItem("sneakershop", jsonProducts);
    }
  };
  const [load, setLoad] = useState(data);
  useEffect(() => {
    setLoad(data);
  }, [data]);

  const handelCheckout = () => {
    const JobsLocalStorage = JSON.parse(localStorage.getItem("sneakershop"));
    if (auth === false) {
      Swal.fire({
        title: "Error!",
        text: "You are not logged in",
        icon: "error",
        confirmButtonText: "OK",
      });
      return navigate("/auth");
    } else if (JobsLocalStorage == 0) {
      Swal.fire({
        title: "Error!",
        text: "Cart is empty",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      navigate("/checkout");
    }
  };
  const [voucherCode, setVoucherCode] = useState({
    code: "",
    price: 0,
  });
  const handelCheckVoucher = () => {
    const check = voucher.find(f => f.code == voucherCode.code)
    if(check !== undefined) {
      setVoucherCode({
        code: "",
        price: check.price,
        total: 0
      })
    }
  }
  const total = useMemo(() => {
    const total = data.reduce((acc, cur) => {
      return acc + (cur.price*cur.quantity);
    }, 0);
    if(voucherCode.price !== 0) {
      setVoucherCode({
        ... voucherCode,
        total: total - voucherCode.price
      })
    }
    else {
      setVoucherCode({
        ... voucherCode,
        total: total
      })
    }
    return total
  }, [voucherCode.price])
  return (
    <>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shopping Cart
              </li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {load.map((m) => {
                        const quantity =
                          sizes === []
                            ? undefined
                            : sizes.find(
                                (f) =>
                                  f.size_id == m.size &&
                                  f.image_color == m.image
                              );
                        return (
                          <>
                            <tr key={m.image}>
                              <td className="product-col">
                                <div className="product">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={url + m.image}
                                        alt="product_image"
                                      />
                                    </a>
                                  </figure>

                                  <h3 className="product-title">
                                    <Link to={`/detail/${m.image}/${m.id}`}>
                                      {m.name}
                                    </Link>
                                  </h3>
                                </div>
                              </td>
                              <td className="quantity-col">
                                <div className="cart-product-quantity">
                                  <Select
                                    className="form-control"
                                    name={m.name}
                                    image={m.image}
                                    quantity={m.quantity}
                                    price={m.price}
                                    size={m.size}
                                    childSize={sizes}
                                    handleChange={handleChange}
                                  />
                                  {/* <select className="form-control">
                                  <option
                                    style={{ height: "30px", display: "block" }}
                                  >
                                    {m.size}
                                  </option>
                                </select> */}
                                </div>
                              </td>
                              <td className="price-col">${m.price}</td>
                              <td className="quantity-col">
                                <div className="cart-product-quantity">
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={m.quantity}
                                    min="1"
                                    max={
                                      quantity !== undefined
                                        ? quantity.quantity
                                        : quantity
                                    }
                                    step="1"
                                    data-decimals="0"
                                  />
                                </div>
                              </td>
                              <td className="total-col">
                                ${m.price * m.quantity}
                              </td>
                              <td className="remove-col">
                                <button className="btn-remove">
                                  <i className="icon-close"></i>
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="cart-bottom">
                    <div className="cart-discount">
                        <div className="input-group">
                          <input
                            value={voucherCode.code}
                            onChange={(e) =>
                              setVoucherCode({
                                ...voucherCode,
                                code: e.target.value,
                              })
                            }
                            type="text"
                            className="form-control"
                            required
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              onClick={handelCheckVoucher}
                            >
                              <i className="icon-long-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>

                    <table
                      className="table table-summary"
                      style={{ display: "block" }}
                    >
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>$ {total}</td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>Voucher:</td>
                          <td>${voucherCode.price}</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>$ {voucherCode.total}</td>
                        </tr>
                      </tbody>
                    </table>

                    <button
                      onClick={handelCheckout}
                      to="/checkout"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>

                  <Link
                    to="/"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
