import React from "react";
import MessageArea from "./MessageArea";

const ContactUs = () => {
  return (
    <div className="mt-16">
      <div className="bg-slate-700 text-white h-32 flex items-center justify-center">
        <div className=" text-center md:w-9/12 w-11/12 mx-auto ">
          <h1 className="font-serif font-bold text-4xl">Contact Us</h1>
        </div>
      </div>
      <div className="md:w-9/12 w-11/12 mx-auto py-5 text-center">
        <h2 className="font-mono text-2xl font-semibold pt-7 pb-1">
          Our Helpline 24×7 Available
        </h2>
        <div className="flex justify-center">
          <hr className="w-16 border border-cyan-500" />
        </div>
        <h1 className="text-3xl font-serif py-5">
          Call us at{" "}
          <span className="font-bold text-cyan-500">+0123 125 1457</span> or
          Email us at{" "}
          <span className="font-bold text-cyan-500">support@site.com</span>
        </h1>
      </div>
      <div>
        <MessageArea></MessageArea>
      </div>
    </div>
  );
};

export default ContactUs;
