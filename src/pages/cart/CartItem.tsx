import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { IProduct } from "../../Props";
import "./Cart.css";

export function CartItem({ id, productImage, productName, price }: IProduct) {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button onClick={() => addToCart(id)}>+</button>
        <span>{cartItems[id]}</span>
        <button onClick={() => removeFromCart(id)}>-</button>
      </div>
    </div>
  );
}
