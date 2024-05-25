export type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type CartItem = {
  addIngredients: string[];
  removeIngredients: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Order = {
  customer: string;
  status: string;
  priority: boolean;
  cart: CartItem[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
};
