import { ShopContext } from "../../context/ShopContext";
import { IProduct } from "../../Props";
import { useContext } from "react";
interface ProductProps {
  products: IProduct[];
}
export function Products({ products }: ProductProps) {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <>
      {products.map((prod) => {
        const cartItemAmount = cartItems[prod.id];
        return (
          <div className="product" key={prod.id}>
            <img src={prod.productImage} alt={prod.productName} />
            <div className="description">
              <p>
                <b>{prod.productName}</b>
              </p>
              <p>${prod.price}</p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(prod.id)}
            >
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
        );
      })}
    </>
  );
}
