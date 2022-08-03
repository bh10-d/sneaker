import React from "react";
import { useState, useEffect } from "react";
import { get } from "../service/apiServices";
import { Hypnosis } from "react-cssfx-loading";
const fakeComments = [
  {
    comment_id: 1,
    comment: "sản phẩm đẹp quá à",
    star: 5,
    product_id: "1",
    user_id: "1",
    date: "12/12/2022",
    parent_id_comment: 0, // click vao comment thi se bat vao id cha va gan vao truong parent id cmt con // cmt duoc toa khong thong qua rep cmt se co parent id la 0
  },
  {
    comment_id: 2,
    comment: "sản phẩm quá tệ",
    star: 0,
    product_id: "1",
    user_id: "2",
    date: "12/12/2022",
    parent_id_comment: 0, //cmt k phai la reply cmt thi co parent id cmt la 0
  },
  {
    comment_id: 3,
    comment: "sản phẩm tốt",
    star: 4,
    product_id: "1",
    user_id: "3",
    date: "12/12/2022",
    parent_id_comment: 1,
  },
];
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [images_color, setImageColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [images_detail, setImageDetail] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [load, loading] = useState(true);
  // load image color
  useEffect(() => {
    const fetchImageColorApi = async () => {
      const result = await get("product/color/data");
      setImageColors(result);
    };
    fetchImageColorApi();
    const fetchProductApi = async () => {
      const result = await get("product/data");
      setProducts(result);
    };
    fetchProductApi();
    const fetchImageDetailApi = async () => {
      const result = await get("product/colorDetail/data");
      setImageDetail(result);
    };
    fetchImageDetailApi();
    const fetchSizeApi = async () => {
      const result = await get("product/size/data");
      setSizes(result);
    };
    fetchSizeApi();
    const fetchDiscountApi = async () => {
      const result = await get("product/discount/data");
      setDiscount(result);
    };
    fetchDiscountApi();
    loading(false);
  }, []);
  // state
  const [data, setData] = useState(() => {
    const check = localStorage.getItem("sneakershop");
    if (check !== "" || check !== []) {
      console.log(check);
      const JobsLocalStorage = JSON.parse(check);
      console.log(JobsLocalStorage);
      return JobsLocalStorage ?? [];
    } else {
      localStorage.removeItem("sneakershop");
      return [];
    }
  });
  //function
  const addProductCart = (props) => {
    // const index = data.findIndex((m) => m.image === props.image);
    // const indexSize = data.findIndex((m) => m.size === props.size);
    const getProduct = data.findIndex(
      (m) => m.image === props.image && m.size === props.size
    );
    // index !== -1 && indexSize !== -1
    if (getProduct !== -1) {
      data[getProduct].quantity += 1;
      setData([...data]);
      const jsonProducts = JSON.stringify(data);
      localStorage.setItem("sneakershop", jsonProducts);
    } else {
      setData((prev) => {
        const newProducts = [
          ...prev,
          {
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: 1,
            size: props.size,
          },
        ];
        const jsonProducts = JSON.stringify(newProducts);
        localStorage.setItem("sneakershop", jsonProducts);
        return newProducts;
      });
    }
  };
  return (
    <AppContext.Provider
      value={{
        products,
        images_color,
        sizes,
        data,
        setData,
        addProductCart,
        images_detail,
        discount,
        fakeComments,
        loading
      }}
    >
      {load === true ? <Hypnosis /> : children}
    </AppContext.Provider>
  );
}
