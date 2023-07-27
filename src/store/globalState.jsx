
import { useState } from 'react';
import DataContext from './dataContext';

function GlobalState(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 123123, name:"Adam"});

    function addToCart(product) {
    let copy = [...cart];
    
    let found = false;
    for(let i=0; i<copy.length; i++) {
        let prodInCart = copy[i];
        if(prodInCart.id == product._id) {
            prodInCart.quantity += product.quantity;
            found = true;
        }
    }

    if(!found) {
        copy.push(product);
    }
 
    setCart(copy);  
    }

    function removeFromCart() {}

    return(
        <DataContext.Provider value={{ 
            cart: cart, 
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalState;