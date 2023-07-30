import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { AiFillDashboard } from "react-icons/ai";

const CandidateRoutes = ({ setTrigger }) =>
{
  return (
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
      <Link href={`/dashboard/appliedJobs`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <BsFillBookmarkCheckFill className="text-xl" />
          &nbsp;&nbsp;&nbsp;Applied Jobs
        </a>
      </Link>
      <Link href={`/dashboard/topCompanies`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <VscOrganization className="text-xl" />
          &nbsp;&nbsp;&nbsp;Companies
        </a>
      </Link>
      {/* skill test */}
      <Link href={`/dashboard/skillTest`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <BiCalendarCheck className="text-xl" />
          &nbsp;&nbsp;&nbsp;Skill Test
        </a>
      </Link>
      {/* skill test */}
      <Link href={`/dashboard/buildResume`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center whitespace-nowrap px-10  "
        >
          <BiCalendarCheck className="text-xl absolute" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build Resume
        </a>
      </Link>
    </>
  );
};

export default CandidateRoutes;
