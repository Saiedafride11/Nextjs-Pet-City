import Link from "next/link";

import SigninForm from "../components/authentication/SigninForm";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const signin = () =>
{
  return (
    <Layout title="Sign in">
      <Header />
      <section className="bg-gray-100 dark:bg-slate-700">
        <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center py-20">
          <div className="text-center mt-10">

            {/* sign up form */}
            <SigninForm />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default signin;
