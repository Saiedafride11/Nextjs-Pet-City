import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/layout/Layout";
import Preloader from "../components/preloader/Preloader";

function MyApp({ Component, pageProps }) {
  const [loader, SetLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => window.addEventListener("load", SetLoader(false)), 1000);
  }, [loader]);

  if (loader) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
