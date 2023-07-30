import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "../../Reuseable/ProfileView";

const CandidateProfile = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <div className="bg-white xl:px-32 py-5 ">
      <div className="md:flex lg:px-10 md:px-5 justify-between">
        <div>
          <h1 className="text-center text-xl font-bold font-serif">Profile</h1>
        </div>

        <Link href={`/dashboard/updateProfile`}>
          <a className="font-mono hover:underline font-extralight text-pink-500   hover:text-pink-600 cursor-pointer rounded-md flex items-center mx-5 mb-5">
            Edit
          </a>
        </Link>
      </div>

      {/* informations */}
      <div>
        <ProfileView role={loggedInUser?.role} loggedInUser={loggedInUser} />
      </div>
    </div>
  );
};

export default CandidateProfile;
