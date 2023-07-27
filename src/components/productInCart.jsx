
import "./productInCart.css";

function ProductInCart(props) {
    return (
        <div className="prod-cart">

            <img src={'/images/' + props.data.image} alt=""></img>

        <div>
            <h4>{props.data.title}</h4>
            <p>{props.data.category}</p>
        </div>

        <label>{props.data.price}</label>
        <label>{props.data.quantity}</label>
        <label>{props.data.price * props.data.quantity}</label>

        </div>
    )
}

export default ProductInCart;