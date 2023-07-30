import Link from "next/link";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { FaRegBuilding, FaUserCircle, FaUserGraduate } from "react-icons/fa";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

const AdminRoutes = ({ setTrigger }) => {
  return (
    <>
      <Link href={`/dashboard/panel`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <AiFillDashboard className="text-lg" />
          &nbsp;&nbsp;&nbsp;Dashboard
        </a>
      </Link>
      <Link href={`/dashboard/profile`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <FaUserTie className="text-lg" />
          &nbsp;&nbsp;&nbsp;Profile
        </a>
      </Link>

      <Link href={`/dashboard/jobs`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <BsBagCheckFill className="text-lg" />
          &nbsp;&nbsp;&nbsp;JOBS
        </a>
      </Link>
      <Link href={`/dashboard/addadmin`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <MdAdminPanelSettings className="text-lg" />
          &nbsp;&nbsp;&nbsp;ADD ADMIN
        </a>
      </Link>
      <Link href={`/dashboard/candidate`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <FaUserGraduate className="text-lg" />
          &nbsp;&nbsp;&nbsp;CANDIDATES
        </a>
      </Link>
      <Link href={`/dashboard/company`}>
        <a
          onClick={() => setTrigger(false)}
          className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
        >
          <FaRegBuilding className="text-lg" />
          &nbsp;&nbsp;&nbsp;COMPANY
        </a>
      </Link>
    </>
  );
};

export default AdminRoutes;
