import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  FcBiotech,
  FcBusinessman,
  FcCollect,
  FcGenericSortingDesc,
  FcList,
  FcManager,
  FcPortraitMode,
  FcReadingEbook,
  FcRemoveImage,
} from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";
import { handleDelete } from "../Admin/Jobs";
import BadgeShow from "../Candidate/skillTest/BadgeShow";

const Panel = () => {
  const [jobs, setJobs] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [recruiter, setRecruiter] = useState([]);
  const [candidate, setCandidate] = useState([]);
  // const [remove, setRemove] = useState([]);
  const [myJobs, setMyJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [postJobs, setpostJobs] = useState([]);
  const [matchJobs, setMatchJobs] = useState([]);
  const router = useRouter();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  useEffect(() => {
    fetch("https://corporate-zone-backend-main.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data);
        setpostJobs(
          data.data.filter(
            (crrElm) => crrElm.companyEmail === loggedInUser?.email
          )
        );
        const matchFound = data.data.filter(
          (posted) => posted.companyEmail === loggedInUser?.email
        );
        setMatchJobs(matchFound);
      });
  }, [postJobs, loggedInUser]);
  //users
  useEffect(() => {
    fetch("https://corporate-zone-backend-main.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          data
            .filter((e) => e.role === "candidate")
            .slice(0, 5)
            .reverse()
        );
        setCandidate(data.filter((e) => e.role === "candidate"));
        setAdmin(data.filter((e) => e.role === "admin"));
        setRecruiter(data.filter((e) => e.role === "recruiter"));
      });
  }, [users, loggedInUser]);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch(
          `https://corporate-zone-backend-main.vercel.app/appliedJobs`
        )
      ).json();
      setMyJobs(data.reverse().slice(0, 5));
    };
    fetchData();
  }, [loggedInUser]);

  const latest = jobs.slice(0, 3).reverse();
  const company = jobs.slice(0, 5).reverse();
  const applicant = candidate
    .map((e) => e.username)
    .reverse()
    .slice(0, 1);
  const handleJobs = () => {
    router.push("/jobs");
  };
  return (
    <div>
      {/* Admin */}
      <h3 className="text-xl uppercase font-medium">top Features</h3>
      {loggedInUser?.role === "admin" && (
        <div>
          <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="spam  w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcCollect className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{matchJobs?.length}</h3>
                <p>Applicant</p>
              </div>
            </div>

            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{jobs.length}</h3>
                <p>Total Jobs</p>
              </div>
            </div>

            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBusinessman className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{recruiter?.length}</h3>
                <p>Active Recruiters</p>
              </div>
            </div>
            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcReadingEbook className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{candidate?.length}</h3>
                <p>Active Candidates</p>
              </div>
            </div>
            <div className="spam w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcRemoveImage className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{handleDelete.length}</h3>
                <p>Spam Jobs</p>
              </div>
            </div>
            <div className="pro_users w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcManager className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">
                  {parseInt(admin.length + candidate.length + recruiter.length)}
                </h3>
                <p>Pro Users</p>
              </div>
            </div>
          </div>

          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Applied Jobs</h3>

            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Candidates Email
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Company Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Apply Date
                        </th>

                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          job Type
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          STATUS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myJobs?.map((job) => (
                        <>
                          <tr
                            key={job.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job?.candidateEmail}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job?.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.companyName}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.appliedDate.toLocaleString()}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.jobType}
                            </td>
                            <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                              <span
                                className={
                                  job.status === "pending"
                                    ? "py-1 px-2 rounded text-sm bg-pink-400 text-white  whitespace-nowrap dark:text-gray-400"
                                    : "py-1 px-2 rounded text-sm bg-green-400 text-white whitespace-nowrap dark:text-gray-400"
                                }
                              >
                                {job.status}
                              </span>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>

            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Applicants
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Deadline
                        </th>

                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Website
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {latest?.map((job) => (
                        <>
                          <tr
                            key={job.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {applicant} +{candidate.length}more...
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.lastDate.toLocaleString()}
                            </td>
                            <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                              <span
                                className={
                                  job.status === "pending"
                                    ? "py-1 px-2 rounded text-sm bg-pink-400 text-white  whitespace-nowrap dark:text-gray-400"
                                    : "py-1 px-2 rounded text-sm bg-green-400 text-white whitespace-nowrap dark:text-gray-400"
                                }
                              >
                                {job.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.companyWebsite}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="applicant my-5">
            <h3 className="text-xl uppercase font-medium my-3">
              New applicants
            </h3>

            <div className="flex flex-wrap justify-evenly items-center gap-5">
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3"
                  >
                    <div>
                      <img
                        className="ring-2 ring-cyan-600 rounded-full w-20 h-20"
                        src={user?.photoURL}
                        alt="pro_pic"
                      />
                    </div>
                    <div className="text-center my-3">
                      <h3>{user?.username}</h3>
                      <p>{user?.portfolio}</p>
                      <span>{user?.location}</span> <br />
                      <button
                        onClick={handleJobs}
                        className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Recruiter */}
      {loggedInUser?.role === "recruiter" && (
        <div>
          <div className="feature_box  flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcGenericSortingDesc className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{postJobs?.length}</h3>
                <p>Posted Jobs</p>
              </div>
            </div>

            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcReadingEbook className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{candidate.length}</h3>
                <p>Active Candidates</p>
              </div>
            </div>
            <div className="spam w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcCollect className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{matchJobs?.length}</h3>
                <p>Applicant</p>
              </div>
            </div>
            <div className="spam w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcRemoveImage className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{handleDelete.length}</h3>
                <p>Spam Jobs</p>
              </div>
            </div>
            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{jobs.length}</h3>
                <p>Total Jobs</p>
              </div>
            </div>
          </div>

          <div className="recent_jobs my-5 ">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>
            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Applicants
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Deadline
                        </th>

                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Website
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {latest?.map((job) => (
                        <>
                          <tr
                            key={job.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {applicant} +{candidate.length}more...
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.lastDate.toLocaleString()}
                            </td>
                            <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                              <span
                                className={
                                  job.status === "pending"
                                    ? "py-1 px-2 rounded text-sm bg-pink-400 text-white  whitespace-nowrap dark:text-gray-400"
                                    : "py-1 px-2 rounded text-sm bg-green-400 text-white whitespace-nowrap dark:text-gray-400"
                                }
                              >
                                {job.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.companyWebsite}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="applicant my-5 ">
            <h3 className="text-xl uppercase font-medium my-3">
              New applicants
            </h3>
            <div className="flex flex-wrap justify-evenly items-center gap-5">
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3"
                  >
                    <div>
                      <img
                        className="ring-2 rounded-full ring-slate-600 w-20 h-20"
                        src={user?.photoURL}
                        alt="pro_pic"
                      />
                    </div>
                    <div className="text-center my-3">
                      <h3>{user?.username}</h3>
                      <p>{user?.portfolio}</p>
                      <span>{user?.location}</span> <br />
                      <button
                        onClick={handleJobs}
                        className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Candidate */}
      {loggedInUser?.role === "candidate" && (
        <div>
          <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBusinessman className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{recruiter.length}</h3>
                <p className="font-medium">Active Recruiters</p>
              </div>
            </div>

            <div className="pro_users w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBiotech className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">{myJobs.length}</h3>
                <p className="font-medium">Applied</p>
              </div>
            </div>
            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{jobs.length}</h3>
                <p className="font-medium">Total Jobs</p>
              </div>
            </div>
          </div>
          <div className="bg-[#d9effa] md:w-7/12 w-full mx-auto border rounded mt-5 p-3">
            <h1 className="mb-5 text-zinc-600 text-2xl font-serif font-bold tracking-widest border-b-4 border-green-500 shadow-md rounded-2xl p-2">
              Skill Test Badges
            </h1>
            <BadgeShow />
          </div>
          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>

            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Job type
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Deadline
                        </th>

                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Website
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {latest?.map((job) => (
                        <>
                          <tr
                            key={job.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job.jobType}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.lastDate.toLocaleString()}
                            </td>
                            <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                              <span
                                className={
                                  job.status === "pending"
                                    ? "py-1 px-2 rounded text-sm bg-pink-400 text-white  whitespace-nowrap dark:text-gray-400"
                                    : "py-1 px-2 rounded text-sm bg-green-400 text-white whitespace-nowrap dark:text-gray-400"
                                }
                              >
                                {job.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.companyWebsite}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="applicant my-5">
            <h3 className="text-xl uppercase font-medium my-3">
              Top Companies
            </h3>

            <div className="flex flex-wrap justify-evenly items-center gap-5">
              {company.map((details) => {
                return (
                  <div
                    key={details.id}
                    className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3"
                  >
                    <div>
                      <img
                        className="ring-2 ring-cyan-600 rounded-full w-20 h-20"
                        src={details?.companyLogo}
                        alt="pro_pic"
                      />
                    </div>
                    <div className="text-center my-3">
                      <h3>{details?.companyName}</h3>
                      <p>{details?.businessType}</p>
                      <span>{details?.companySize}</span> <br />
                      <button
                        onClick={handleJobs}
                        className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panel;
