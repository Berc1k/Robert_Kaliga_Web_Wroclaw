import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../components/CartCard";
import type { RootState } from "../store/store";
import { NavButton } from "../components/NavButton";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

export function Summary() {
  const { cartItems, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    localStorage.setItem(
      "orderSummary",
      JSON.stringify({ cartItems, totalAmount })
    );

    dispatch(clearCart());

    navigate("/confirmation");
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <>
          <div className="flex flex-col gap-4 mb-6">
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} showActions={false} />
            ))}
          </div>
          <div className="text-right text-lg font-semibold">
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-6">
            <NavButton
              link="/cart"
              text="Back to Cart"
              bgColor="bg-green-400"
              hoverColor="bg-green-500"
            />
            <ActionButton
              onClick={handleOrder}
              text="Place Order"
              bgColor="bg-pink-400"
              hoverColor="bg-pink-500"
            />
          </div>
        </>
      </div>
    </div>
  );
}
