import Image from "next/image";
import { FcOk } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import job from "../../images/job_hunt.svg";
import hired from "../../images/career_progress.svg";
import interview from "../../images/interview.svg";
import bgParallax from "../About/About.module.css";
import { useEffect } from "react";


const Works = () =>
{
  useEffect(() =>
  {
    AOS.init();
  }, [])
  return (
    <div className="py-5 relative">
      <h3 className="text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 md:after:border-cyan-500 after:left-0 after:bottom-0 after:right-60 after:top-36 after:mx-auto font-medium text-slate-700 dark:text-slate-50 uppercase my-20">
        How Does IT Works
      </h3>

      <div className="fascinate md:grid grid-cols-2 lg:w-9/12 md:w-10/12 mx-auto ">
        <div
          className="space-y-7 mx-20 dark:text-slate-50"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-2xl font-medium"> Fascinate</h3>
          <p className="leading-7 max-w-[500px] text-slate-700 dark:text-slate-50">
            Super user-friend user interface along with customization options to
            make your jobs look attractive for the potential candidates.
          </p>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Showcase Stunning Company Page
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Highlight Work Culture & Benefits
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Easy To Create Candidate Profile
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Interactive Job Application
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Form In-app Messaging With Candidates
          </li>
        </div>
        <div>
          <Image
            className=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={job}
            alt=""
          />
        </div>
      </div>

      <div className="process md:grid grid-cols-2 lg:w-9/12 md:w-10/12 mx-auto my-20">
        <Image
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={hired}
          alt=""
        />
        <div
          className="space-y-7 mx-20"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-2xl font-medium dark:text-slate-50"> Process</h3>
          <p className="leading-7 max-w-[500px] text-slate-700 dark:text-slate-50">
            Personalized team management system along with smart tracking and
            engaging user experience to make the recruitment process faster.
          </p>
          <li className="flex text-slate-700  dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Advanced Applicant Tracking & Filter
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Automatic Resume Parsing & Analyze
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Smart & Quick Evaluation Process
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Smart & Quick Evaluation Process
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Effortless Interview Scheduling
          </li>
        </div>
      </div>

      <div className="hire md:grid grid-cols-2 lg:w-9/12 md:w-10/12 mx-auto my-20">
        <div
          className="space-y-7 mx-20"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-2xl font-medium dark:text-slate-50"> Recruit</h3>
          <p className="leading-7 max-w-[500px] text-slate-700 dark:text-slate-50">
            Seamless and advanced recruitment system to make the best hiring
            decisions & create the most efficient team with the right people.
          </p>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Specialized Note For Team
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Advanced Scoring Process
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Customizable Pipeline
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Remote Hiring Ready
          </li>
          <li className="flex text-slate-700 dark:text-slate-50">
            <FcOk className="mx-3 text-[#36b9f7]" />
            Automated Offer Letter
          </li>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={interview}
          alt=""
        />
      </div>
    </div>
  );
};

export default Works;
