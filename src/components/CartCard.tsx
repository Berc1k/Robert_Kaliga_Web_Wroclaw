import type { CartCardProps } from "../types/interfaces";
import { ActionButton } from "./ActionButton";

export function CartCard({
  product,
  onIncrease,
  onDecrease,
  onRemove,
  showActions = true,
}: CartCardProps) {
  const { name, price, quantity } = product;
  const formattedPrice = `${price.main}.${price.fractional
    .toString()
    .padStart(2, "0")}`;
  const totalPrice = ((price.main + price.fractional / 100) * quantity).toFixed(
    2
  );

  return (
    <div className="flex justify-between items-center p-4 rounded-lg shadow-lg mb-4">
      <div>
        <h2 className="font-bold">{name}</h2>
        <p className="text-gray-500">Price: ${formattedPrice}</p>
        {!showActions && <p className="text-gray-500">Quantity: {quantity}</p>}
        <p className="text-gray-500">Total: ${totalPrice}</p>
      </div>
      {showActions && (
        <div className="flex items-center gap-4">
          {onDecrease && (
            <ActionButton
              onClick={onDecrease}
              text="-"
              bgColor="bg-red-200"
              hoverColor="bg-red-400"
            />
          )}
          <span>{quantity}</span>
          {onIncrease && (
            <ActionButton
              onClick={onIncrease}
              text="+"
              bgColor="bg-green-200"
              hoverColor="bg-green-400"
            />
          )}
          {onRemove && (
            <ActionButton
              onClick={onRemove}
              text="Remove"
              bgColor="bg-red-500"
              hoverColor="bg-red-600"
            />
          )}
        </div>
      )}
    </div>
  );
}
