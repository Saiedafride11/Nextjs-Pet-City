import { useForm } from "react-hook-form";
import React, { useState, useMemo } from "react";
import axios from "axios";
import useFirebase from "../../../redux/slices/user/useFirebase";
import Select from "react-select";
import countryList from "react-select-country-list";

const CandidateForm = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  // location
  const changeHandler = (country) => {
    setCountry(country);
  };

  // signup method
  const { signupWithEmailAndPassword } = useFirebase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      ...data,
      photoURL,
      role: "candidate",
      location: country.label,
    };
    signupWithEmailAndPassword(
      data.username,
      data.email,
      data.password,
      photoURL,
      userInfo
    );
  };

  // image upload handler
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    // (imageData);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPhotoURL(response.data.data.display_url);
      })
      .catch(function (error) {
        error;
      });
  };
  return (
    <div className="lg:w-5/12 md:w-9/12 w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* generel details */}
        <div className="grid  grid-cols-1 gap-3 ">
          {/* username */}
          <div>
            <p className="font-serif py-1">Enter your username</p>
            <input
              className=" w-full  border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Elon mask"
              {...register("username", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.username && (
              <span className="text-sm text-red-500 block">
                username is required
              </span>
            )}
          </div>
          {/* email */}
          <div>
            <p className="font-serif py-1">Enter your email</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="example@gmail.com"
              type="email"
              {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-sm text-red-500 block">
                email is required
              </span>
            )}
          </div>
          {/* mobile number */}
          <div>
            <p className="font-serif py-1">Enter your Mobile Number</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="+880"
              type="text"
              {...register("phone", { required: true, pattern: /^(?=.{11,})/ })}
            />
            {/* errors will return when field validation fails  */}
            <span className="text-sm text-red-500 block">
              {errors.phone?.type === "required" && "phone  is required"}
            </span>
            <span className="text-sm text-red-500 block">
              {errors.phone?.type === "pattern" &&
                "phone must be 11 characters"}
            </span>
          </div>

          {/* photo uploaded */}

          {/* photo upload */}
          <div>
            <p className="font-serif py-1">Upload your photo</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none"
              placeholder="photoURL"
              id="photoURL"
              type="file"
              {...register("photoURL", { required: true })}
              onBlur={imageUploadHandler}
            />
            {/* errors will return when field validation fails  */}
            {errors.photoURL && (
              <span className="text-sm text-red-500 block">
                photoURL is required
              </span>
            )}
          </div>
          {/* // professional details */}

          {/* location */}
          <div>
            <p className="font-serif py-1">Your location</p>
            <Select
              options={options}
              value={country}
              onChange={changeHandler}
            />
          </div>

          {/* password */}

          <div>
            <p className="font-serif py-1">Password</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Password at least 6 characters"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.{6,})/,
              })}
            />
            {/* errors will return when field validation fails  */}
            <span className="text-sm text-red-500 block">
              {errors.password?.type === "required" && "password  is required"}
            </span>
            <span className="text-sm text-red-500 block">
              {errors.password?.type === "pattern" &&
                "password must be 6 characters"}
            </span>
          </div>
        </div>

        <div className="text-center py-7">
          <input
            className="  py-2 border  border-cyan-500 text-cyan-500 px-7 rounded font-medium  focus:outline-none cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300"
            value="Register New Candidate"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
