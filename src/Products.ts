import iphone from "./assets/products/1.png";
import macBook from "./assets/products/2.png";
import canon from "./assets/products/3.png";
import jacket from "./assets/products/4.png";
import ledLights from "./assets/products/5.png";
import hippieShirt from "./assets/products/6.webp";
import shirt from "./assets/products/7.webp";
import cap from "./assets/products/8.webp";
import { IProduct } from "./Props";
export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: iphone,
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: macBook,
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: canon,
  },
  {
    id: 4,
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: jacket,
  },
  {
    id: 5,
    productName: "LED Light Strips",
    price: 19.99,
    productImage: ledLights,
  },
  {
    id: 6,
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: hippieShirt,
  },
  {
    id: 7,
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: shirt,
  },
  {
    id: 8,
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: cap,
  },
];
