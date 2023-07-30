import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillDashboard, AiFillTags } from "react-icons/ai";

const RecruiterRoutes = ({ setTrigger }) =>
{
  return (
    <>
      <>
        <Link href={`/dashboard/panel`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <AiFillDashboard className="text-xl" />
            &nbsp;&nbsp;&nbsp;Dashboard
          </a>
        </Link>
        <Link href={`/dashboard/profile`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <FaUserTie className="text-xl" />
            &nbsp;&nbsp;&nbsp;Profile
          </a>
        </Link>
        <Link href={`/dashboard/postedJobs`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <BsFillFileEarmarkPostFill className="text-xl" />
            &nbsp;&nbsp;&nbsp;Posted Jobs
          </a>
        </Link>
        <Link href={`/dashboard/applicant`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <FiUsers className="text-xl" />
            &nbsp;&nbsp;&nbsp;Applicant
          </a>
        </Link>
        <Link href={`/dashboard/orderHistory`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <AiFillTags className="text-xl" />
          &nbsp;Order History
          </a>
        </Link>
      </>
    </>
  );
};

export default RecruiterRoutes;
