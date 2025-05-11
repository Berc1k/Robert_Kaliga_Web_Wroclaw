export interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartState {
  cartItems: CartProduct[];
  totalAmount: number;
}

export interface CartCardProps {
  product: CartProduct;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
  showActions?: boolean;
}
