import RegisterUser from "../../components/authentication/RegisterUser";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const Signup = () =>
{
  return (
    <Layout title="Sign up">
      <Header />
      <section className="bg-gray-100 dark:bg-slate-700 py-10">
        <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center py-20">
          <RegisterUser />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Signup;
