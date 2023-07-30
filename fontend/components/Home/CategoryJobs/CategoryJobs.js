import {
  MdRestaurantMenu,
  MdOutlineAccountBalance,
  MdMedicalServices,
  MdBookmarkAdd,
  MdOutlineCodeOff,
  MdOutlineQrCodeScanner,
} from "react-icons/md";
import { FaIndustry } from "react-icons/fa";

const CategoryJobs = () => {
  return (
    <div className="my-5 w-screen">
      <ul className="md:flex sm:flex sm:flex-wrap justify-center items-center  bg-slate-100 md:w-9/12 mx-auto my-7 py-5 rounded-lg shadow-lg relative">
        <li className="mx-4 text-center md:h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95 px-3">
          <a href="#">
            <span>
              <MdOutlineQrCodeScanner className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Technology</h3>
            <p className="text-sm font-light">10 jobs</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95">
          <a href="#">
            <span>
              <MdOutlineCodeOff className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Developer</h3>
            <p className="text-sm font-light">15 jobs</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95">
          <a href="#">
            <span>
              <MdBookmarkAdd className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Government</h3>
            <p className="text-sm font-light">7 jobs</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95">
          <a href="#">
            <span cl>
              <MdOutlineAccountBalance className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Accounting</h3>
            <p className="text-sm font-light">4 jobs(dynamic)</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95">
          <a href="#">
            <span className="text-red-300">
              <MdMedicalServices className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Medical</h3>
            <p className="text-sm font-light">7 jobs</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:text transform duration-500 hover:scale-95">
          <a href="#">
            <span>
              <MdRestaurantMenu className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Restaurants</h3>
            <p className="text-sm font-light">5 jobs</p>
          </a>
        </li>

        <li className="mx-4 text-center h-32 md:w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95">
          <a href="#">
            <span>
              <FaIndustry className="text-5xl mx-auto text-cyan-500" />
            </span>
            <h3 className="text-2xl mt-2">Industrial</h3>
            <p className="text-sm font-light">9 jobs</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryJobs;
