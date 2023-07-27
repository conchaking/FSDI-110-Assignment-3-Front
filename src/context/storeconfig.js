import React from "react";

let store = React.createContext({
    cart:[],
    addProductToCart:() => {}, 
    removeProductToCart:() => {}, 
})

export default store 