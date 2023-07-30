import RecruiterRegisterLayout from "../../components/authentication/recruiterRegister/RecruiterRegisterLayout";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const RegisterAsCompany = () =>
{
  return (
    <Layout title="Recruiter Registration">
      <Header />
      <section className="bg-gray-100 dark:bg-slate-700 py-10">
        <div className="bg-white md:w-9/12 w-11/12 mx-auto py-5">
          <RecruiterRegisterLayout />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default RegisterAsCompany;
