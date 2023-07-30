import ContactUs from "../components/ContactUs/ContactUs";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const Contact = () => {
  return (
    <Layout title="Contact us">
      <Header />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default Contact;
