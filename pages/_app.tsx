import type { AppProps } from "next/app";
import Compose from "../utils/compose/compose";
import Layout from "../layout/layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Providers = [Layout];

  return (
    <Compose providers={Providers}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </Compose>
  );
};

export default MyApp;
