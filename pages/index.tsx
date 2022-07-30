import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../providers/product/product-store";
import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card/card";
import Loader from "../components/loader/loader";
import { Product } from "../types/product";
import { ProductActions } from "../providers/product/product-actions";

const Home: NextPage = () => {
  const { products } = useSelector((state: RootState) => state.ProductReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ProductActions.GET_PRODUCTS });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Home | Cart Web Application</title>
      </Head>

      <>
        <div className="grid grid-cols-2 gap-20 py-10 justify-items-center">
          {products &&
            products.map((product: Product) => (
              <Card product={product} key={product.title + product.id} />
            ))}
        </div>
        {!products && <Loader />}
      </>
    </>
  );
};

export default Home;
