import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import type { Product, CartProduct } from "../types/interfaces";
import type { RootState } from "../store/store";
import { ActionButton } from "./ActionButton";

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const isInCart = cartItems.some(
    (item: CartProduct) => item.id === product.id
  );

  const handleButtonClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className="flex justify-between items-center p-4 rounded-lg shadow-lg transition-all hover:-translate-y-4">
      <div>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-green-300">
          ${product.price.main}.
          {product.price.fractional.toString().padStart(2, "0")}
        </p>
      </div>
      <ActionButton
        onClick={handleButtonClick}
        text={isInCart ? "Remove from Cart" : "Add to Cart"}
      />
    </div>
  );
}
