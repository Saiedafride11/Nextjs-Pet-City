import React from "react";
import axios from "axios";
import { BsFillCameraFill } from "react-icons/bs";

const PhotoUpload = ({ register, setPhotoURL, photoURL }) => {
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setPhotoURL(response.data.data.display_url);
      })
      .catch((error) => {
        error;
      });
  };
  return (
    <div className="w-full flex justify-center">
      <label
        htmlFor="image"
        className="relative group w-56 h-48 overflow-hidden cursor-pointer"
        style={{ borderRadius: "50%" }}
      >
        <img
          src={photoURL}
          className="w-56 h-48 border-2 border-slate-600/40  relative overflow-hidden"
          style={{ borderRadius: "50%" }}
          alt=""
        />
        <p className="absolute  w-56 text-center duration-400 group-hover:flex top-32 overflow-hidden bg-gray-400/70 px-16 py-4">
          <BsFillCameraFill className="text-3xl text-white ml-8 " />
        </p>
      </label>
      <input
        className="hidden"
        id="image"
        type="file"
        {...register("photoURL")}
        onChange={imageUploadHandler}
      />
    </div>
  );
};

export default PhotoUpload;
