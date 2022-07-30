import { combineReducers } from "redux";
import { ProductActions } from "./product-actions";
import { Product, Products } from "../../types/product";

const initialState: Products = {
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
};

const ProductReducers = (
  state = initialState,
  action: { type: string; payload: Product }
) => {
  switch (action.type) {
    case ProductActions.INCREMENT: {
      const newProducts = state.products.map((product: Product) => {
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
    case ProductActions.DECREMENT: {
      const newProducts = state.products.map((product: Product) => {
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
  ProductReducers,
});
