import React from "react";
import { useState } from "react";


const fakeDataApi = [
    {
        id: "1",
        // path: "images/products/product-4.jpg",
        type: "Women",
        name: "abc",
        price: "60.00",
        reviews: "2",
        status: "new"
    },
    {
        id: "2",
        // path: "images/products/product-5.jpg",
        type: "Dress",
        name: "abc",
        price: "75.00",
        reviews: "10",
        status: "out"
    },
    {
        id: "3",
        // path: "images/products/product-5.jpg",
        type: "Shoese",
        name: "dsa",
        price: "100.00",
        reviews: "10",
        status: "top"
    }
]


const fakeImageApi = [
    {
        id: "1",
        path: "/images/products/product-4.jpg",
    },
    {
        id: "2",
        path: "/images/products/product-5.jpg",
    },
    {
        id: "1",
        path: "/images/products/product-5.jpg",
    },
    {
        id: "2",
        path: "/images/products/product-4.jpg",
    },
    {
        id: "1",
        path: "/images/products/product-1.jpg",
    },
    {
        id: "3",
        path: "/images/products/product-6.jpg",
    }
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
        // console.log(props)
        // console.log(image)
    };

    return (
        <AppContext.Provider
            value={{
                fakeDataApi,
                fakeImageApi,
                test,
                setTest,
                addProductCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
