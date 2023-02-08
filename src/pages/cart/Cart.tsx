import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../Products";
import { CartItem } from "./CartItem";

export function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((prod) => {
          if (cartItems[prod.id] !== 0) {
            return (
              <CartItem
                key={prod.id}
                id={prod.id}
                productImage={prod.productImage}
                productName={prod.productName}
                price={prod.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
