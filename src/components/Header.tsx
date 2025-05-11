import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { NavButton } from "./NavButton";

export function Header() {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );

  return (
    <div className=" flex justify-between items-center p-5 bg-green-100">
      <h1 className="text-3xl text-green-500 ">Shop</h1>
      <div>
        <NavButton
          link="/cart"
          bgColor="bg-green-400"
          hoverColor="hover:bg-green-500"
          text="Cart"
        />
        {cartItemsCount !== 0 && (
          <div className="bg-red-500 text-white rounded-full text-center absolute top-2 right-3 right-0 w-5 h-5">
            {cartItemsCount}
          </div>
        )}
      </div>
    </div>
  );
}
