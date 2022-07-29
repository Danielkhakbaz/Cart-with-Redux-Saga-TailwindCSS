import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Card from "../components/card/card";
import API from "../services/api/api.json";
import { Product } from "../types/product";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      await axios.get(`${API.baseURL}/data`).then((response) => {
        setProducts(response.data.products);
      });
    };

    fetchAPI();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Cart Web Application</title>
      </Head>

      <>
        <div className="grid grid-cols-2 gap-20 py-10 justify-items-center">
          {products.map((product) => (
            <Card product={product} key={product.title + product.id} />
          ))}
        </div>
      </>
    </>
  );
};

export default Home;
