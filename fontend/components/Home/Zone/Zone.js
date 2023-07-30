import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillPieChartFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import card from "../../../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Zone = () =>
{
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const router = useRouter();

  useEffect(() =>
  {
    AOS.init();
  }, []);
  return (
    <div className="mx-10 md:mx-20 md:my-40 ">
      <div className="md:grid md:grid-cols-2 lg:w-10/12 mx-auto space-y-20 ">
        <div className="md:grid md:grid-cols-3 gap-5  ">
          <div
            className="dark:bg-[#ebf8fe] bg-[#e8f8fd] flex justify-center items-center rounded-2xl shadow-xl w-max-[300px] h-[150px]"
          // className={card.zone_card}
          >
            <h4 className="text-md p-2 text-center font-medium text-slate-800 dark:text-white bg-[#ebf8fe] dark:bg-slate-700 py-2">
              Attract & Manage The Right Talent
            </h4>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-center text-[#42C2FF]">
            <MdMarkEmailRead className="text-7xl ring-2 mt-8 md:mt-0 rounded-lg ring-[#42c3ffe5] hover:transform duration-500 hover:scale-105" />
          </div>
          <div
            className="dark:bg-[#ebf8fe] bg-[#e8f8fd] flex justify-center items-center rounded-2xl shadow-xl w-max-[300px] h-[150px]"
          // className={card.zone_card}
          >
            <h4 className="text-md p-2 text-center font-medium text-slate-800 dark:text-white bg-[#ebf8fe] dark:bg-slate-700 ">
              Highly Structured Candidate Pipeline
            </h4>
          </div>
          <div
            data-aos="zoom-in-down"
            className="flex items-center justify-center text-[#42C2FF]">
            <FaLaptopCode className="text-7xl ring-2 mt-8 md:mt-0 rounded-lg ring-[#42c3ffe5] hover:transform duration-500 hover:scale-105" />
          </div>
          <div
            // className={card.zone_card}
            className="dark:bg-[#ebf8fe] bg-[#e8f8fd] flex justify-center items-center rounded-2xl shadow-xl w-max-[300px] h-[150px]">
            <h4 className="text-md p-2 text-center font-medium text-slate-800 dark:text-white bg-[#ebf8fe] dark:bg-slate-700 py-2">
              Faster & Better Hiring Process
            </h4>
          </div>
          <div
            data-aos="zoom-in-down"
            className="flex items-center justify-center text-[#42C2FF]">
            <BsFillPieChartFill className="text-7xl ring-2 mt-8 md:mt-0 rounded-lg ring-[#42c3ffe5] hover:transform duration-500 hover:scale-105" />
          </div>
          <div
            className="dark:bg-[#ebf8fe] bg-[#e8f8fd] flex justify-center items-center rounded-2xl shadow-xl w-max-[300px] h-[150px]"
          // className={card.zone_card}
          >
            <h4 className="text-md p-2 text-center font-medium text-slate-800 dark:text-white bg-[#ebf8fe] dark:bg-slate-700 py-2">
              User Friendly Process & Easy Communication
            </h4>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-center text-[#42C2FF]">
            <RiUserSearchFill className="text-7xl ring-2 mt-8 md:mt-0 rounded-lg ring-[#42c3ffe5] hover:transform duration-500 hover:scale-105" />
          </div>
          <div
            className="dark:bg-[#ebf8fe] bg-[#e8f8fd] flex justify-center items-center rounded-2xl shadow-xl w-max-[300px] h-[150px]"
          // className={card.zone_card}
          >
            <h4 className="text-md p-2 text-center font-medium text-slate-800 dark:text-white bg-[#ebf8fe] dark:bg-slate-700 py-2">
              Remotely Hiring Ready For Candidates
            </h4>
          </div>
        </div>

        <div
          className="ml-16 text-justify "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <div className="">
            <h3 className=" xl:text-5xl md:text-3xl text-xl font-bold leading-snug dark:text-white text-slate-800 text-left">
              Why Does Your Company Need CorporateZone?
            </h3>
            <p className="text-gray-500 dark:text-[#eee9e9]  leading-7 mt-5">
              Advanced Recruiting Solution With Everything You Need To
              Accelerate The Hiring Process. Remote Hiring or Local -
              CorporateZone Streamline The Whole Recruitment Process & Make It
              Easier Than Ever Before
            </p>
            <p className="text-gray-500 dark:text-[#eee9e9] leading-7 my-5">
              <strong className="text-lg">
                You manage the tech. We manage everything else.{" "}
              </strong>
              <br />
              We only hire the top 1% of candidates that apply. This enables us
              to have a very strong internal community of engineers. Whenever an
              obstacle arises, the community instantly provides support and
              removes it, resulting in a far quicker development process.
            </p>
            {loggedInUser && loggedInUser?.role === "candidate" && (
              <button
                onClick={() => router.push("/jobs")}
                className="pl-4 font-bold uppercase flex items-center space-x-3 pr-3 py-3  hover:text-[#42C2FF] text-white hover:transform duration-500 hover:scale-105 border-2 border-[#42C2FF] rounded-lg bg-[#42C2FF] hover:bg-white ml-5"
              >
                Browse Jobs <BiRightArrowAlt className="font-medium text-2xl" />
              </button>
            )}
            {loggedInUser?.role === "recruiter" && (
              <button
                onClick={() => router.push("/jobpost")}
                className="pl-4 font-bold uppercase flex items-center space-x-3 pr-3 py-3  hover:text-[#42C2FF] text-white hover:transform duration-500 hover:scale-105 border-2 border-[#42C2FF] rounded-lg bg-[#42C2FF] hover:bg-white ml-5"
              >
                Post a job <BiRightArrowAlt className="font-medium text-2xl" />
              </button>
            )}
            {!loggedInUser && (
              <button
                onClick={() => router.push("/signin")}
                className="pl-4 font-bold uppercase flex items-center space-x-3 pr-3 py-3  hover:text-[#42C2FF] text-white hover:transform duration-500 hover:scale-105 border-2 border-[#42C2FF] rounded-lg bg-[#42C2FF] hover:bg-white ml-5"
              >
                Join US <BiRightArrowAlt className="font-medium text-2xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zone;
