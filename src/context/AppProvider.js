import React from "react";
import { useState } from "react";

const fakeDataApi = [
  {
    id: "1",
    type: "Adidas",
    name: "SuperStar",
    price: "60.00",
    reviews: "2",
    status: "new",
  },
  {
    id: "2",
    type: "Adidas",
    name: "Forum",
    price: "75.00",
    reviews: "10",
    status: "out",
  },
  {
    id: "3",
    type: "Adidas",
    name: "BOA Codechaos",
    price: "100.00",
    reviews: "10",
    status: "top",
  },
];

const fakeImageApi = [
  {
    id: "1",
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
  },
  {
    id: "2",
    image_color: "Giay_Co_Thap_Forum_trang_FY7756_01_standard-removebg-preview.png",
  },
  {
    id: "1",
    image_color: "Giay_Superstar_trang_GZ3742_01_standard-removebg-preview.png",
  },
  {
    id: "2",
    image_color: "Giay_Co_Thap_Forum_trang_FY7757_01_standard-removebg-preview.png",
  },
  {
    id: "1",
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
  },
  {
    id: "3",
    image_color: "Giay_DJinh_Lien_BOA_Codechaos_22_DJen_GX3937_01_standard-removebg-preview.png",
  },
  {
    id: "3",
    image_color: "Giay_DJinh_Lien_BOA_Codechaos_22_trang_GX0199_01_standard-removebg-preview.png",
  },
  {
    id: "3",
    image_color: "Giay_DJinh_Lien_BOA_Codechaos_22_trang_GX3938_01_standard-removebg-preview.png",
  },
];

const fakeImageDetail = [
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4958_02_standard_hover-removebg-preview.png"
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4958_03_standard-removebg-preview.png"
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4958_04_standard-removebg-preview.png"
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4960_02_standard_hover-removebg-preview.png"
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4960_03_standard-removebg-preview.png"
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    image_detail: "Giay_Superstar_trang_EG4960_04_standard-removebg-preview.png"
  },
]
const fakeSize = [
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 40
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 39
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 40
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 41
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 42
  },
  {
    image_color: "Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png",
    size: 43
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    size: 40
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    size: 41
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    size: 42
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    size: 43
  },
  {
    image_color: "Giay_Superstar_trang_EG4960_01_standard-removebg-preview.png",
    size: 44
  },
]
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  // state
  const [test, setTest] = useState(() => {
    const check = localStorage.getItem("sneakershop");

    if (check !== "") {
      const JobsLocalStorage = JSON.parse(localStorage.getItem("sneakershop"));
      // console.log(JobsLocalStorage)
      return JobsLocalStorage ?? [];
    } else {
      localStorage.removeItem("sneakershop");
      return [];
    }
  });

  //function
  const addProductCart = (props, { image }) => {
    const { id, name, price } = props;
    const index = test.findIndex((m) => m.image === image);
    if (index !== -1) {
      localStorage.removeItem("sneakershop");
      test[index].quantity += 1;
      setTest(() => [...test]);
      const jsonProducts = JSON.stringify(test);
      localStorage.setItem("sneakershop", jsonProducts);
    } else {
      setTest((prev) => {
        const newProducts = [
          ...prev,
          {
            id: props.id,
            name: props.name,
            price: props.price,
            image: image,
            quantity: 1,
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
        fakeDataApi,
        fakeImageApi,
        fakeSize,
        test,
        setTest,
        addProductCart,
        fakeImageDetail
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
