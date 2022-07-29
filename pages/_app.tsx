import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../layout/layout";
import { Store } from "../providers/product/product-store";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
