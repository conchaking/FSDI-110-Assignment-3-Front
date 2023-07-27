import "./product.css";
import QuantityPicker from './quantityPicker';
import { useEffect, useState, useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props){
    const [quantity,setQuantity] = useState(1);
    const addToCart = useContext(DataContext).addToCart;

        useEffect(function(){
            console.log("hello im a product");            
        },[]);

    const onQuantityChange = (qty) => {
        console.log(qty);
        setQuantity(qty);
    }

    function handleAddProduct() {        
        let productForCart = {...props.data, quantity: quantity};
        addToCart(productForCart);

}

    return (
        <div className="product">
            <img src={"/images/"+props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            
            <div className="prices d-flex justify-content-evenly">
                <label>Price: ${props.data.price.toFixed(2)} | </label>
                <label>Total: {(props.data.price * quantity).toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={onQuantityChange} />
        
            <button onClick={handleAddProduct} className="btn btn-sm btn-success">Add</button>
        </div>
    );
}
export default Product;