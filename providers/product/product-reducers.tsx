import { combineReducers } from "redux";
import { ProductActions } from "./product-actions";
import { Product, Products } from "../../types/product";

const initialState: any = [];

const ProductReducers = (
  state = initialState,
  action: { type: string; payload: Product; products: Products }
) => {
  switch (action.type) {
    case ProductActions.GET_PRODUCTS_SUCCESS: {
      return { ...state, products: action.products };
    }
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
    case ProductActions.INCREMENT_SUCCESS: {
      return { ...state, product: action.payload };
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
    case ProductActions.DECREMENT_SUCCESS: {
      return { ...state, product: action.payload };
    }
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  ProductReducers,
});
