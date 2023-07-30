import React from 'react';
import style from './Message.module.css'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImAddressBook } from 'react-icons/im';

const MessageArea = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="md:w-9/12 w-11/12 mx-auto py-5">
        <h1 className="text-3xl font-semibold py-3 capitalize">
          Leave Message
        </h1>
        <div className="grid md:grid-cols-3 rounded">
          <div
            className="col-span-2  border-l-2 border-pink-500"
            style={{
              backgroundColor: "white",
              padding: "40px 20px",
            }}
          >
            <form>
              <div className="">
                <input
                  className="w-full border border-gray-300 py-2 px-3 my-2 focus:outline-none"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="w-full border border-gray-300 py-2 px-3 my-2 focus:outline-none"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="w-full border border-gray-300 py-2 px-3 my-2 focus:outline-none"
                  placeholder="Subject"
                  type="text"
                />{" "}
                <br />
                <textarea
                  className="w-full border border-gray-300 py-2 h-28  px-3 my-2 focus:outline-none"
                  placeholder="Type Your Message"
                  type="text"
                />
                <br />
              </div>
              <button
                style={{
                  backgroundColor: "#EC4991",
                  marginTop: "10px",
                  padding: "10px 40px",
                  fontWeight: "700",
                  borderRadius: "30px",
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Contact
              </button>
            </form>
          </div>
          <div className="bg-cyan-600 text-white py-4 px-3">
            <h1 style={{ marginTop: "30px" }}> CONTACT INFO</h1>
            <div className={style.pera}>
              <div className={style.pera0}>
                <ImAddressBook
                  style={{ fontSize: "25px", marginRight: "20px" }}
                />{" "}
                <p> 110, B Kalani Bag Dewas #455001 MP India</p> <br />
              </div>
              <div className={style.pera1}>
                <AiOutlineMail
                  style={{ fontSize: "25px", marginRight: "20px" }}
                />{" "}
                <p> jobpro@exaple.com</p>
              </div>
              <div className={style.pera1}>
                <AiOutlinePhone
                  style={{ fontSize: "25px", marginRight: "20px" }}
                />{" "}
                <p> +61 3 8376 6284</p>
              </div>
              <div className={style.social}>
                <button>
                  <AiFillFacebook />
                </button>
                <button>
                  <AiFillTwitterSquare />
                </button>
                <button>
                  <AiFillLinkedin />
                </button>
                <button>
                  <AiOutlineInstagram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
