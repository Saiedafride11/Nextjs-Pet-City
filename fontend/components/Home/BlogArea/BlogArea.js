import { AiOutlineCalendar } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
const BlogArea = () => {
  return (
    <div className=" lg:w-9/12 w-11/12 mx-auto marginbottom container">
      <h1 className="text-center text-3xl font-serif py-3">Cariar advice</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8 lg:gap-12  md:px-20 lg:px-32 py-10">
        <div className="shadow-md">
          <img src="https://i.ibb.co/QNVYczx/blog6.jpg" alt="" />

          <p className="my-3 ml-3 flex">
            {" "}
            <span className="mt-1 mr-2 colorC">
              {" "}
              <AiOutlineCalendar />{" "}
            </span>{" "}
            07 FEB, 2022
          </p>

          <h1 className="my-3 w-4/5 ml-3 font-bold">
            Join Team HTML Developer Pro Jobs
          </h1>
          <p className="my-3 w-11/12 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem,
            culpa amet suscipit aspernatur vel ....
          </p>
          <div className="footer flex justify-between py-3 cfooter">
            <h4 className="flex ml-5">
              {" "}
              <span className="mt-1 mr-2 text-xl ">
                {" "}
                <BiUserCircle />{" "}
              </span>{" "}
              admin
            </h4>

            <div className="mt-2 mr-8">
              <p className="texticon">
                {" "}
                <BsChatSquareText />{" "}
              </p>
              <p className="textnumber">3</p>
            </div>
          </div>
        </div>
        <div className="shadow-md">
          <img src="https://i.ibb.co/4NzD5p9/blog3.jpg" alt="" />

          <p className="my-3 ml-3 flex">
            {" "}
            <span className="mt-1 mr-2 colorC">
              {" "}
              <AiOutlineCalendar />{" "}
            </span>{" "}
            07 FEB, 2022
          </p>

          <h1 className="my-3 w-4/5 ml-3 font-bold">
            Join Team HTML Developer Pro Jobs
          </h1>
          <p className="my-3 w-11/12 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem,
            culpa amet suscipit aspernatur vel ....
          </p>
          <div className="footer flex justify-between py-3 cfooter">
            <h4 className="flex ml-5">
              {" "}
              <span className="mt-1 mr-2 text-xl ">
                {" "}
                <BiUserCircle />{" "}
              </span>{" "}
              admin
            </h4>

            <div className="mt-2 mr-8">
              <p className="texticon">
                {" "}
                <BsChatSquareText />{" "}
              </p>
              <p className="textnumber">0</p>
            </div>
          </div>
        </div>
        <div className="shadow-md">
          <img src="https://i.ibb.co/SvdFh9B/blog5.jpg" alt="" />

          <p className="my-3 ml-3 flex">
            {" "}
            <span className="mt-1 mr-2 colorC">
              {" "}
              <AiOutlineCalendar />{" "}
            </span>{" "}
            07 FEB, 2022
          </p>

          <h1 className="my-3 w-4/5 ml-3 font-bold">
            Join Team HTML Developer Pro Jobs
          </h1>
          <p className="my-3 w-11/12 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem,
            culpa amet suscipit aspernatur vel ....
          </p>
          <div className="footer flex justify-between py-3 cfooter">
            <h4 className="flex ml-5">
              {" "}
              <span className="mt-1 mr-2 text-xl ">
                {" "}
                <BiUserCircle />{" "}
              </span>{" "}
              admin
            </h4>

            <div className="mt-2 mr-8">
              <p className="texticon">
                {" "}
                <BsChatSquareText />{" "}
              </p>
              <p className="textnumber">9</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .marginbottom {
            // margin-bottom: 700px;
            //   position:relative
          }
          .texticon {
          }

          .textnumber {
            position: relative;

            top: -25px;
            left: 10px;
            background-color: #ff0000;
            color: white;
            font-size: 10px;
            padding-left: 5px;
            width: 17px;
            height: 17px;
            border-radius: 50%;
          }

          .colorC {
            //   background-color:green;
            color: red;
            font-size: 20px;
          }

          .cfooter {
            background-color: #f9f9f9;
            border-bottom: 2px solid #23c0e9;
          }
        `}
      </style>
    </div>
  );
};

export default BlogArea;
