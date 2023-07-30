import CandidateRegisterLayout from "../../components/authentication/candidateRegister/CandidateRegisterLayout";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const RegisterAsCompany = () =>
{
  return (
    <Layout title="Company Registration">
      <Header />
      <section className="bg-gray-100 dark:bg-slate-700 py-10">
        <div className="bg-white md:w-9/12 w-11/12 mx-auto py-5">
          <CandidateRegisterLayout />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default RegisterAsCompany;
