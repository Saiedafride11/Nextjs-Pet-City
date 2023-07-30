import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "../Reuseable/ProfileView";

const AdminProfile = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <div className="bg-white xl:px-32 py-5 ">
      <div className="md:flex lg:px-10 md:px-5 justify-between">
        <div className="mx-auto">
          <h1 className="text-center text-2xl font-bold font-serif">Profile</h1>
        </div>
      </div>

      {/* informations */}
      <div>
        <ProfileView role={loggedInUser?.role} loggedInUser={loggedInUser} />
      </div>
    </div>
  );
};

export default AdminProfile;
