import { PRODUCTS } from "../../Products";
import { Products } from "./Products";
import "./shop.css";

export function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lelak Store</h1>
      </div>
      <div className="products">
        <Products products={PRODUCTS} />
      </div>
    </div>
  );
}
