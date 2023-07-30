import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

export default function RuleComponent ({ title, description })
{
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col p-5 lg:mx-10 mx-2 my-5 border-x-4 dark:bg-slate-900 border-pink-500 rounded-xl shadow-md text-gray-light">
      <div className="flex justify-between items-start">
        <p
          className={`text-left dark:text-white ${expanded &&
            "font-light bg-slate-700 dark:bg-slate-200 rounded-xl shadow-md text-white dark:text-black px-3"
            }`}
        >
          {title}
        </p>
        <BsPlusLg
          onClick={() => setExpanded(!expanded)}
          className={`w-7 h-7 ml-2 hover:bg-slate-700 dark:bg-white hover:dark:bg-slate-700 rounded-full p-1 hover:text-white cursor-pointer transition duration-500 ease-in-out ${expanded ? "rotate-45" : "rotate-90"
            }`}
        />
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden text-justify mt-2 dark:text-white ${expanded ? "max-h-screen" : "max-h-0"
          }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
}
