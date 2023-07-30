import { useRouter } from "next/router";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";

const Notification = ({ notifications }) =>
{
  const [trigger, setTrigger] = useState(false);
  const [length, setLength] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => { setTrigger(!trigger); setLength(true); }}
        className="flex justify-center items-center hover:text-[#42C2FF]"
      >
        <BsBellFill className="w-7 h-7 dark:text-white" />
        {notifications.length > 0 && (
          <span className={`absolute top-1 right-20 ${length && 'hidden'}`}>
            <div className="inline-flex items-center px-1 py-0.25 border-2 border-white dark:border-black rounded-full text-xs font-semibold bg-red-500 text-white">
              {notifications.length}
            </div>
          </span>
        )}
      </button>
      <div
        className={
          trigger
            ? "bg-white dark:bg-slate-600 md:block hidden shadow-md w-auto absolute z-10 rounded top-14 right-20"
            : "hidden"
        }
      >
        <div className="ml-4 mb-2">
          <h2 className="text-2xl normal-case font-semibold text-gray-700 dark:text-white tracking-widest my-3">
            Notifications
          </h2>
        </div>
        <div className="w-72 h-72 overflow-y-scroll chats border-t-2 border-green-500">
          <ul className="p-2">
            {notifications.map((n) => (
              <li
                onClick={() => router.push(`/jobs/${n._id}`)}
                key={n.length}
                className=" hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg p-2 cursor-pointer"
              >
                <h1 className="text-slate-700 dark:text-slate-200">{n?.jobTitle}</h1>
                <span className="text-xs lowercase italic text-green-500">
                  Posted By, {n?.companyEmail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notification;
