import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { CartCard } from "../components/CartCard";
import { NavButton } from "../components/NavButton";
import { ActionButton } from "../components/ActionButton";

export function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-50 mb-50">
          <h1 className="text-2xl mb-4">Your Cart is Empty</h1>
          <NavButton
            link="/"
            text="Start Shopping"
            bgColor="bg-green-400"
            hoverColor="hover:bg-green-500"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-8 max-w-3xl mx-auto mt-10">
          <div>
            {cartItems.map((item: { id: number }) => (
              <CartCard
                key={item.id}
                product={item}
                onIncrease={() => dispatch(increaseQuantity(item.id))}
                onDecrease={() => dispatch(decreaseQuantity(item.id))}
                onRemove={() => dispatch(removeFromCart(item.id))}
              />
            ))}
          </div>
          <div className="flex justify-between items-center p-4">
            <p className="text-lg font-bold">
              Subtotal: ${totalAmount.toFixed(2)}
            </p>
            <NavButton
              link="/"
              bgColor="bg-green-400"
              hoverColor="bg-green-500"
              text="Add more products"
            />

            <ActionButton
              onClick={handleClearCart}
              text="Clear Cart"
              bgColor="bg-red-500"
              hoverColor="bg-red-600"
            />

            <NavButton
              link="/summary"
              bgColor="bg-green-400"
              hoverColor="bg-green-500"
              text="Go to summary"
            />
          </div>
        </div>
      )}
    </div>
  );
}
