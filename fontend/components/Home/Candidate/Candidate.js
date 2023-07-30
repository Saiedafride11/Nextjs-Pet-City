import { ImUserCheck, ImUserTie } from "react-icons/im";
import { RiUserSearchFill, RiWechatFill } from "react-icons/ri";


const Candidate = () => {
    return (
      <>
        <div className="space-y-7 mx-auto md:w-3/4 relative my-6 recent_header">
          <div className="md:flex md:justify-around lg:flex lg:justify-evenly order-2 mx-3 ml-20">
            <div className="space-y-5 md:w-2/4 lg:w-2/4 dark:text-white text-slate-800 mr-0 md:mr-8">
              <h3 className="text-3xl font-medium my-12 md:my-5">
                Find The Right Candidate Faster
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between max-w-[500px] space-y-7 ml-0 md:ml-5">
                <div>
                  <ImUserCheck className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    Smart Candidate Selection
                  </h4>
                  <p>
                    Analyze and filter your desired applicants to get the right
                    one & make the recruitment process faster than ever before
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between max-w-[500px] space-y-7 ml-0 md:ml-5">
                <div>
                  <ImUserTie className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    Interactive Interview Process
                  </h4>
                  <p>
                    Quiz, Personality Test & more to make the interview engaging
                    for both and full freedom of remote hiring!
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between max-w-[500px] space-y-7 ml-0 md:ml-5">
                <div>
                  <RiWechatFill className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    In-app Messaging With Candidates
                  </h4>
                  <p>
                    Choose, Track and instantly contact with the candidate via
                    messaging & make the hiring process smoother & effective
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/4 lg:w-2/4 lg:order-last md:order-last order-1 mt-12 md:mt-0">
              <img
                className="mt-3 transform hover:scale-105 duration-500"
                src="https://i.ibb.co/b6qqX0x/easyjobs-hiring-image-2-png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Candidate;