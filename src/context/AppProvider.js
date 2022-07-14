import React from "react";
import { useState } from "react";

// const datatest = [
//     {
//         id: 1,
//         name: 'Beige knitted elastic runner shoes',
//         price: '84.00',
//         image: 'images/products/cart/product-1.jpg',
//         quantity: 3
//     },
//     {
//         id: 2,
//         name: 'Blue utility pinafore denim dress',
//         price: '76.00',
//         image: 'images/products/cart/product-2.jpg',
//         quantity: 1
//     }
// ]

export const AppContext = React.createContext();
export default function AppProvider({ children }) {
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

  const addProductCart = ({ props, image }) => {
    const { id, name, price } = props;
    const index = test.findIndex((m) => m.image === image);
    if (index !== -1) {
      test[index].quantity += 1;
      setTest(() => [...test])
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
        test,
        setTest,
        addProductCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
