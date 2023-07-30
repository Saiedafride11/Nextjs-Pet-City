import React, { useState } from "react";
import Script from "next/script";
import Layout from "../../components/layout/Layout";
import Header from "../../components/Shared/Header/Header";
import { Jutsu } from "react-jutsu";
import Marquee from "./Marquee";

const Video_Chat = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
    <Layout title="join meet">
      <div>
        <Header />
        <div
          style={{ height: "40vw" }}
          className="flex justify-center items-center flex-col bg-gray-800"
        >
          <Marquee direction="left" />
          <Jutsu
            roomName={room}
            displayName={name}
            password={password}
            onMeetingEnd={() => "Meeting has ended"}
            loadingComponent={<p>loading ...</p>}
            errorComponent={<p>Oops, something went wrong</p>}
          />
          <Marquee direction="right" />
        </div>
      </div>
    </Layout>
  ) : (
    <Layout title="join meet">
      {/* outside of meet  */}
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-2 md:py-8 flex justify-center items-center flex-col bg-gray-800">
          <div className="w-100 md:w-3/4 lg:w-2/3 mx-auto">
            <form className=" form px-8 pt-6 pb-8 mb-4">
              <div className="mb-5 text-center">
                <h1 className="text-3xl text-white tracking-wide">
                  <span className="text-blue-500 inline-block text-4xl font-bold">
                    J
                  </span>
                  oin
                  <span className="text-red-600 inline-block text-4xl font-bold ml-1">
                    M
                  </span>
                  eet
                </h1>
              </div>
              <input
                className="shadow inline-block mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="room"
                type="text"
                placeholder="Create Room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
              <input
                className="shadow inline-block mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow inline-block mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Write Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleClick}
                type="submit"
              >
                Join Now
              </button>
            </form>
          </div>
          <body>
            <Script src="https://meet.jit.si/external_api.js"></Script>
          </body>
        </div>
        <div className="bg-gray-800">
          <img
            className="animate-pulse"
            src="https://i.ibb.co/S0q1cBD/download-1.png"
            alt="meet_Now"
          />
        </div>
      </div>
      <style jsx>
        {`
          /* From https://css.glass */
          .form {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
          }
        `}
      </style>
    </Layout>
  );
};

export default Video_Chat;
