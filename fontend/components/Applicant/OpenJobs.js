import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ApplyJobs from "./ApplyJobs";

const OpenJobs = ({ id, title, postTime, lastDate }) =>
{
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col p-5 lg:mx-10 mx-2 my-5 dark:bg-slate-900 rounded-xl shadow-md text-gray-light">
            <div className="flex justify-between items-start">
                <div
                    className={`flex flex-col lg:flex-row dark:text-white tracking-wider ${expanded &&
                        "font-light bg-slate-700 dark:bg-slate-200 rounded-xl shadow-md text-white dark:text-black pl-3"
                        }`}
                >
                    <h1>{title}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Posted Date: {postTime}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="lg:bg-red-500 lg:rounded-2xl lg:px-2 lg:text-white">Last Date: {lastDate}</p>
                </div>
                <BsPlusLg
                    onClick={() => setExpanded(!expanded)}
                    className={`w-7 h-7 ml-2 hover:bg-slate-700 dark:bg-white hover:dark:bg-slate-700 rounded-full p-1 hover:text-white cursor-pointer transition duration-500 ease-in-out ${expanded ? "rotate-45" : "rotate-90"
                        }`}
                />
            </div>
            <div
                className={`transition-max-height duration-700 ease-in-out overflow-hidden text-justify mt-2 dark:text-white ${expanded ? "max-h-screen overflow-y-scroll" : "max-h-0"
                    }`}
            >
                <ApplyJobs id={id} />
            </div>
        </div>
    )
}

export default OpenJobs