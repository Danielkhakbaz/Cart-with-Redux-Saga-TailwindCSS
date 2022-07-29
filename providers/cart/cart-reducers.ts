import { combineReducers } from "redux";
import { CartActions } from "./cart-actions";

const initialState: any = [
  {
    products: [
      {
        id: 1,
        title: "Product No.1",
        quantity: 0,
      },
      {
        id: 2,
        title: "Product No.2",
        quantity: 0,
      },
      {
        id: 3,
        title: "Product No.3",
        quantity: 0,
      },
      {
        id: 4,
        title: "Product No.4",
        quantity: 0,
      },
    ],
  },
];

const CartReducers = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CartActions.INCREMENT: {
      const newProducts = state.products.map((product: any) => {
        if (action.payload.id === product.id) {
          return { ...action.payload, quantity: product.quantity + 1 };
        }
        return product;
      });

      return {
        ...state,
        products: newProducts,
      };
    }
    case CartActions.DECREMENT: {
      const newProducts = state.products.map((product: any) => {
        if (action.payload.id === product.id) {
          return { ...action.payload, quantity: product.quantity - 1 };
        }
        return product;
      });

      return {
        ...state,
        products: newProducts,
      };
    }
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  CartReducers,
});
