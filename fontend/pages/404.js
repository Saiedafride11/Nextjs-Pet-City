import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

import React from "react";

const NotFound = () => {
  return (
    <Layout title="Not found">
      <Header />
      <div
        className="flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <h1>404 Page Not Found</h1>
      </div>
    </Layout>
  );
};

export default NotFound;
