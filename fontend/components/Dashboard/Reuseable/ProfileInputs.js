const ProfileInputs = ({ register, loggedInUser }) => {
  return (
    <>
      {/* username */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Username
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.username}
          disabled
        />
      </div>

      {/* email */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Email
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.email}
          disabled
        />
      </div>

      {/* phone */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Phone
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="number"
          defaultValue={`0${loggedInUser?.phone}`}
          {...register("phone")}
        />
      </div>

      {/* location */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Location
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.location}
          //   {...register("location")}
          disabled
        />
      </div>
    </>
  );
};

export default ProfileInputs;
