import { combineReducers } from "redux";
import { ProductActions } from "./product-actions";

const initialState: any = {
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
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ProductActions.INCREMENT: {
      const incrementedProduct = action.payload;

      const newProducts = state.products.map((product: any) => {
        if (incrementedProduct.id === product.id) {
          return { ...incrementedProduct, quantity: product.quantity + 1 };
        }
        return product;
      });

      return {
        ...state,
        products: newProducts,
      };
    }
    case ProductActions.DECREMENT: {
      const decrementedProduct = action.payload;

      const newProducts = state.products.map((product: any) => {
        if (decrementedProduct.id === product.id) {
          return { ...decrementedProduct, quantity: product.quantity - 1 };
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
