import { useSelector } from "react-redux";
import { RootState } from "../providers/product/product-store";
import { Product } from "../types/product";

export const useAddedProducts = () => {
  const { products } = useSelector((state: RootState) => state.ProductReducers);

  return products?.filter((product: Product) => product.quantity !== 0);
};
