import { useSelector } from "react-redux";
import { useEffect } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";

const Pricing = () =>
{
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  useEffect(() =>
  {
    const query = new URLSearchParams(window.location.search);

    if (query.get("canceled")) {
      Swal.fire(
        "Order canceled!",
        "continue to apply and checkout when you’re ready.",
        "warning"
      );
    }
  }, []);

  return (
    loggedInUser?.role === "recruiter" && (
      <div className="py-12">
        <section className="lg:w-9/12 w-11/12 mx-auto relative mb-16">
          <h3 className="text-3xl text-center after:content-[''] after:text-red-500 after:absolute after:border-t-2 after:w-20 after:border-cyan-500 after:left-0 after:bottom-0 after:right-56 after:top-10 after:mx-auto font-medium text-slate-700 dark:text-white">
            Our Simple, transparent pricing
            <br />
            <span className="text-base text-cyan-700 dark:text-slate-300">No contracts, No surprise fees.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 text-center px-5 md:px-20 lg:px-32 py-10">
            <div className="bg-white text-center pt-5 pb-10 shadow-md card card_1">
              <div className="text-center">
                <h2 className="text-2xl font-semibold head_title relative">
                  BASIC PLAN
                </h2>
                <h1 className="mt-10">
                  <span className="inline-block text-3xl title shadow-md bg-blue-400">
                    <span className="inline-block title_middle font-semibold">
                      $29
                    </span>
                  </span>
                </h1>
              </div>
              <div className="pt-10 flex flex-col">
                <div className="flex justify-left items-center mb-2 list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">5 Jobs Posting</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 2 Featured jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 1 Renew Jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 10 Days Duration</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">Email Alert</p>
                </div>
              </div>
              <form
                action="/api/checkout_sessions_one"
                method="POST"
                className="flex flex-row mt-5 justify-center items-center"
              >
                <button
                  type="submit"
                  role="link"
                  className="flex flex-row justify-center items-center py-3 px-5 text-white bg-gray-800 rounded-md shadow-md hover:bg-red-500 hover:transform duration-500 hover:scale-110"
                >
                  <HiPlusCircle className="inline-block text-lg mr-2" />
                  <span className="inline-block font-semibold">Buy Plan</span>
                </button>
              </form>
            </div>

            <div className="bg-white text-center pt-5 pb-10 shadow-md lg:relative lg:bottom-5 card card_2">
              <div className="card_sticker text-center">
                <AiOutlineStar className="text-white text-xl inline-block mr-4" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold head_titles relative">
                  PREMIUM PLAN
                </h2>
                <h1 className="mt-10">
                  <span className="inline-block text-3xl title shadow-md bg-red-500">
                    <span className="inline-block title_middle font-semibold">
                      $59
                    </span>
                  </span>
                </h1>
              </div>
              <div className="pt-10 flex flex-col">
                <div className="flex justify-left items-center mb-2 list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">10 Jobs Posting</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 5 Featured jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 2 Renew Jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 15 Days Duration</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">Email Alert</p>
                </div>
              </div>
              <form
                action="/api/checkout_sessions_two"
                method="POST"
                className="flex flex-row mt-5 justify-center items-center"
              >
                <button
                  type="submit"
                  role="link"
                  className="flex flex-row justify-center items-center py-3 px-5 text-white rounded-md shadow-md bg-red-500 hover:bg-blue-400 hover:transform duration-500 hover:scale-110"
                >
                  <HiPlusCircle className="inline-block text-lg mr-2" />
                  <span className="inline-block font-semibold">Buy Plan</span>
                </button>
              </form>
            </div>

            <div className="bg-white text-center pt-5 pb-10 shadow-md card card_1">
              <div className="text-center">
                <h2 className="text-2xl font-semibold head_title relative">
                  ADVANCED PLAN
                </h2>
                <h1 className="mt-10">
                  <span className="inline-block text-3xl title shadow-md bg-blue-400">
                    <span className="inline-block title_middle font-semibold">
                      $99
                    </span>
                  </span>
                </h1>
              </div>
              <div className="pt-10 flex flex-col">
                <div className="flex justify-left items-center mb-2 list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">15 Jobs Posting</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 10 Featured jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 5 Renew Jobs</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2"> 20 Days Duration</p>
                </div>
                <div className="flex justify-left items-center mb-2 text-md list_item">
                  <HiPlusCircle className="inline-block text-lg" />
                  <p className="ml-2">Email Alert</p>
                </div>
              </div>
              <form
                action="/api/checkout_sessions_three"
                method="POST"
                className="flex flex-row mt-5 justify-center items-center"
              >
                <button
                  type="submit"
                  role="link"
                  className="flex flex-row justify-center items-center py-3 px-5 text-white bg-gray-800 rounded-md shadow-md hover:bg-red-500 hover:transform duration-500 hover:scale-110"
                >
                  <HiPlusCircle className="inline-block text-lg mr-2" />
                  <span className="inline-block font-semibold">Buy Plan</span>
                </button>
              </form>
            </div>
          </div>

          <style jsx>
            {`
            .list_item {
              margin-left: 25%;
            }

            .card {
              border-top: 1px solid #dcdde1;
              border-left: 1px solid #dcdde1;
              border-right: 1px solid #dcdde1;
            }

            .card_1 {
              border-bottom: 2px solid #0984e3;
              position: relative;
              border-radius: 5px;
            }

            .card_2 {
              border-bottom: 2px solid #e74c3c;
              position: relative;
              border-radius: 5px;
            }

            .title {
              padding: 20px 17px;
              transform: rotate(45deg);
              border-radius: 22px;
              position: relative;
            }

            .card_1::before,
            .card_2::before {
              content: "";
              display: block;
              width: 100%;
              height: 1.5px;
              position: absolute;
              top: 130px;
              background: #dcdde1;
            }

            .card_sticker {
              position: absolute;
              width: 50px;
              height: 30px;
              background: #f4a733;
              top: 9px;
              right: 0;
              clip-path: polygon(
                100% 0%,
                63% 52%,
                100% 100%,
                0 100%,
                0% 50%,
                0 0
              );
              transform: rotate(90deg);
            }

            .head_title::before {
              content: "";
              display: block;
              position: absolute;
              width: 10px;
              height: 1px;
              top: 40px;
              left: 35%;
              background: #0097e6;
            }

            .head_titles::before {
              content: "";
              display: block;
              position: absolute;
              width: 10px;
              height: 1px;
              top: 40px;
              left: 35%;
              background: #ee4444;
            }
            .head_title::after {
              content: "";
              display: block;
              position: absolute;
              width: 50px;
              height: 1px;
              top: 40px;
              left: 42%;
              background: #0097e6;
            }

            .head_titles::after {
              content: "";
              display: block;
              position: absolute;
              width: 50px;
              height: 1px;
              top: 40px;
              left: 42%;
              background: #ee4444;
            }

            .title_middle {
              color: #fff;
              transform: rotate(-45deg);
            }
          `}
          </style>
        </section>
      </div>
    )
  );
};

export default Pricing;
