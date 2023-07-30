const ProfileLinks = ({ register, errors, loggedInUser }) => {
  return (
    <>
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Resume(Google Drive)
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.resumeLink}
          {...register("resumeLink", {
            pattern:
              /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          })}
        />
        <span className="text-sm text-red-500 block">
          {errors.resumeLink?.type === "pattern" &&
            "Please insert a valid link"}
        </span>
      </div>
      {/* github link */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Github Profile
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.githubProfile}
          {...register("githubProfile", {
            pattern:
              /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          })}
        />
        <span className="text-sm text-red-500 block">
          {errors.githubProfile?.type === "pattern" &&
            "Please insert a valid link"}
        </span>
      </div>
      {/* portfolio */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          Portfolio Link
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.portfolio}
          {...register("portfolio", {
            pattern:
              /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          })}
        />
        <span className="text-sm text-red-500 block">
          {errors.portfolio?.type === "pattern" && "Please insert a valid link"}
        </span>
      </div>
      {/* linkedin profile */}
      <div>
        <label className="py-2 font-serif block" htmlFor="resumeLink">
          LinkedIn Profile link
        </label>
        <input
          className="w-full border-2 rounded-full px-2 py-1 focus:outline-none"
          type="text"
          defaultValue={loggedInUser?.linkedInProfile}
          {...register("linkedInProfile", {
            pattern:
              /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          })}
        />
        <span className="text-sm text-red-500 block">
          {errors.linkedInProfile?.type === "pattern" &&
            "Please insert a valid link"}
        </span>
      </div>
    </>
  );
};

export default ProfileLinks;
