import React, { createContext } from "react";

import { dataCart } from "../data/productData";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [product, setProduct] = React.useState(dataCart);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    function addToCart(productId) {
        const productFind = product.find((itemProduct) => itemProduct.id === productId);

        if(!productFind.id) return;

        setCart((prevCart) => ([
            ...prevCart,
            productFind
        ]))
    }

    function removeCart(productId) {
        const remove = cart.filter((itemFind) => itemFind.id != productId);

        setCart(remove);
    }

    React.useMemo(() => {
        const total = cart.reduce((acc, curr) => {
            return acc + curr.quanlity * curr.price
        },0)
        setTotal(total);
    },[cart])

    function plusQuanlity(productId) {
        const findIndex = cart.findIndex((itemIndex) => itemIndex.id === productId);
        const newCart = [...cart];
        newCart[findIndex].quanlity = newCart[findIndex].quanlity + 1;
        setCart(newCart);
    }

    function minQuanlity(productId) {
        const findIndex = cart.findIndex((itemFind) => itemFind.id === productId);
        const newCart = [...cart];
        
        let value = newCart[findIndex].quanlity;

        if(value === 1) {
            newCart.splice(findIndex, 1);
        } else {
            newCart[findIndex].quanlity = newCart[findIndex].quanlity - 1;
        }
        setCart(newCart);
    }

    return (
        <AppContext.Provider value={{
            product,
            cart,
            total,

            addToCart,
            removeCart,
            plusQuanlity,
            minQuanlity,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const cartAppContext = () => React.useContext(AppContext);