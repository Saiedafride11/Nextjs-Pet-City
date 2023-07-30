import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data;
  };

  return (
    <div className="bg-teal-50">
      <form
        className="w-2/4 mx-auto flex flex-col justify-center items-center h-[100vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-slate-500 focus:bg-teal-100"
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          className=" cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4 bg-teal-800 text-lg text-gray-50  transform duration-500 hover:scale-95"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );
};

export default AddAdmin;
