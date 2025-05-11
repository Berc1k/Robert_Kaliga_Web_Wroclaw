import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CartProduct } from "../types/interfaces";
import { ActionButton } from "../components/ActionButton";
import { CartCard } from "../components/CartCard";

export function Confirmation() {
  const [orderSummary, setOrderSummary] = useState<{
    cartItems: CartProduct[];
    totalAmount: number;
  } | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderSummary");
    if (savedOrder) {
      setOrderSummary(JSON.parse(savedOrder));
    }
  }, []);

  const handleClearOrder = () => {
    localStorage.removeItem("orderSummary");

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1 className="text-2xl font-bold">Order placed successfully!</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {orderSummary ? (
          <>
            <div className="flex flex-col gap-4 mb-6">
              {orderSummary.cartItems.map((item) => (
                <CartCard key={item.id} product={item} showActions={false} />
              ))}
            </div>
            <div className="text-right text-lg font-semibold">
              <p>Order Total: ${orderSummary.totalAmount.toFixed(2)}</p>
            </div>
          </>
        ) : (
          <p className="text-lg font-light">No order found.</p>
        )}
      </div>
      <ActionButton
        onClick={handleClearOrder}
        text="Continue Shopping"
        bgColor="bg-green-500"
        hoverColor="bg-green-600"
      />
    </div>
  );
}
