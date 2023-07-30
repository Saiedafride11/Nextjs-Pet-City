import React from "react";
import CandidateUpdateForm from "./CandidateUpdateForm";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const CandidateProfileUpdate = () => {
  return (
    <div className="bg-white xl:px-32 py-5 ">
      <div className="md:flex lg:px-10 md:px-5 justify-between">
        <div>
          <h1 className="text-center text-xl font-bold font-serif">
            Update Your Profile Information
          </h1>
          <p className="text-center text-sm font-serif">
            (fill the form with correct information)
          </p>
        </div>

        <Link href={`/dashboard/profile`}>
          <a className=" font-extralight text-pink-500   hover:text-pink-600 cursor-pointer rounded-md flex items-center mx-5 mb-5">
            <ImCross />
          </a>
        </Link>
      </div>

      {/* // form */}
      <div>
        <CandidateUpdateForm />
      </div>
    </div>
  );
};

export default CandidateProfileUpdate;
