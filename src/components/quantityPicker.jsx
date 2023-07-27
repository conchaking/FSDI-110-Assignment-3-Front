import "./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(props) {

    let [quantity, setQuantity] = useState(1);

    function increase()
    {
        console.log("Increasing quantity");
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    function decrease()
    {
        console.log("Decreasing quantity");
        if (quantity===1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }

    return(
        <div className="quantityPicker mb-1">
            <button className="btn btn-primary btn-sm" disabled={quantity === 1} onClick={decrease}>-</button>
            
            <label>{quantity}</label>
            <button className="btn btn-primary btn-sm" onClick={increase}>+</button>
        </div>
    );
} 

export default QuantityPicker;