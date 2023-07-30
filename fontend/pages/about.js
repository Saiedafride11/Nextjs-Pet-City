import About from "../components/About/About";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const about = () => {
  return (
    <Layout title="About Us">
      <Header />
      <About />
      <Footer />
    </Layout>
  );
};

export default about;
