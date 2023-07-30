import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const RegisterUser = () => {
  return (
    <div className="w-full lg:grid grid-cols-2 ">
      <div className="text-center bg-white py-14">
        <div className="flex justify-center">
          <RiComputerLine className="text-5xl text-cyan-500 animate-bounce" />
        </div>
        <h3 className="text-center text-3xl font-serif py-3">
          I’M AN EMPLOYER
        </h3>
        <div className="flex justify-center">
          <div className="text-center border border-b border-cyan-500 w-20"></div>
        </div>
        <p className="text-center pt-7 text-gray-500">
          Signed in companies are able to post new job offers, searching
        </p>
        <p className="text-center pb-5 text-gray-500">for candidate...</p>

        <div className="flex justify-center">
          <Link href="/signup/recruiter-register">
            <a className="bg-cyan-600 text-white px-5 font-bold py-2 rounded-lg flex items-center uppercase hover:bg-cyan-700">
              <AiOutlinePlusCircle className="text-white mr-2" />
              register as recruiter
            </a>
          </Link>
        </div>
      </div>

      {/* company  */}
      <div className="text-center bg-gray-800 text-white py-14">
        <div className="flex justify-center">
          <AiOutlineUser className="text-5xl text-cyan-500 animate-bounce" />
        </div>
        <h3 className="text-center text-3xl font-serif py-3">
          I’M A CANDIDATE
        </h3>
        <div className="flex justify-center">
          <div className="text-center border border-b border-cyan-500 w-20"></div>
        </div>
        <p className="text-center pt-7 text-gray-100">
          Signed in companies are able to post new job offers, searching
        </p>
        <p className="text-center pb-5 text-gray-100">for candidate...</p>

        <div className="flex justify-center">
          <Link href="/signup/candidate-register">
            <a className="bg-white text-black px-5 font-bold py-2 rounded-md flex items-center uppercase hover:bg-cyan-600 hover:text-white transition duration-300">
              <AiOutlinePlusCircle className=" mr-2 " />
              register candidate
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
