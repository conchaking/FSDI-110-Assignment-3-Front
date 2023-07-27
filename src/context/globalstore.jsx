import store from "./storeconfig";
import {useState} from "react";

const GlobalStore = (props) => {
    let [cart, setCart] = useState([])

    let addProductToCart = (prod) => {
        let copy = [...cart];
        copy.push(prod)
        setCart(copy)
    }
    return (
        <store.Provider
        value = {{
            cart:cart,
            addProductToCart:addProductToCart
        }}>{props.children}</store.Provider>
    )
}

export default GlobalStore