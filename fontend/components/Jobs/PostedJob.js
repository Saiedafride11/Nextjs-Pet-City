import Image from "next/image";
import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";

const PostedJob = ({ job }) =>
{
  const { jobTitle, companyLogo, companyName, jobType, salary, location } = job;
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`jobs/${job._id}`)}
      className="sm:grid grid-cols-12 cursor-pointer items-center bg-white dark:bg-slate-900 dark:text-slate-200 rounded py-5 px-5"
    >
      <div className="col-span-2">
        {/* <Image src={job?.companyLogo} alt="" width="100" height="100" /> */}
        <img src={companyLogo} alt="logo" width="100" height="100" />
      </div>
      <div className="col-span-8">
        <h2>
          {jobTitle}
          <span className="text-cyan-500 font-normal"> ({companyName})</span>
        </h2>
        <h4 className="flex items-center py-2">
          <FaRegMoneyBillAlt className="text-green-500 mr-2" />{" "}
          <strong>{salary}</strong>
        </h4>
        <h4 className="flex items-center ">
          <GoLocation className="text-green-500 mr-2" />{" "}
          <small>{location}</small>
        </h4>
        <h3 className="font-bold py-2 capitalize">{jobType} Job</h3>
      </div>
      <div className="col-span-2">
        <button className="bg-[#42C2FF] px-4 py-1 rounded text-white">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PostedJob;
