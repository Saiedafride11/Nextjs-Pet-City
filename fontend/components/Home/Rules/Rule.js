import Image from "next/image";
import { useState } from "react";
import RuleComponent from "./RuleComponent";
import { RiDoubleQuotesR } from "react-icons/ri";

const Rule = () =>
{
  const rRules = [
    {
      key: 0,
      title: "How many team members can I invite?",
      description:
        "You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 1,
      title: "What is the maximum file upload size?",
      description:
        "No more than 2GB. All files in your account must fit your alloted storage space. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 2,
      title: "What is the rules of job processing?",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 3,
      title: "How do I reset my password?",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 4,
      title: "Can I reset my profile one again?",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
  ];

  const cRules = [
    {
      key: 0,
      title: "Can I cancel my subscription?",
      description:
        "You can, but there is no money-back guarantee. You can invite as many team members as you like. You can invite as many team members as you like.. You can invite as many team members as you like.. You can invite as many team members as you like.",
    },
    {
      key: 1,
      title: "Do you provide additional support?",
      description:
        "Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! Yes, please get in touch via e-mail! ",
    },
    {
      key: 2,
      title: "One candidate able to apply more that 20 job",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 3,
      title: "What is the recruitment procedure?",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
    {
      key: 4,
      title: "How do I reset my password?",
      description:
        "You can use the reset password function from the settings menu. You can invite as many team members as you like. You can invite as many team members as you like.",
    },
  ];

  const recruiter = rRules.map((r) =>
  {
    return (
      <RuleComponent key={r.key} title={r.title} description={r.description} />
    );
  });

  const candidate = cRules.map((r) =>
  {
    return (
      <RuleComponent key={r.key} title={r.title} description={r.description} />
    );
  });

  const [trigger, setTrigger] = useState(0);

  return (
    <>
      <div className="bg-slate-800 text-white h-16 flex items-center justify-center">
        <div className=" text-center md:w-9/12 w-11/12 mx-auto ">
          <h1 className="font-serif font-bold lg:text-4xl text-2xl">
            Rules & Regulations
          </h1>
        </div>
      </div>
      <div>
        <div className="text-center bg-slate-200 shadow-xl p-2">
          <button
            onClick={() => setTrigger(0)}
            className="bg-[#42C2FF] text-white hover:bg-[#85F4FF] hover:text-black mx-2 px-5 py-2 transition duration-700 ease-in-out hover:scale-105 rounded-xl shadow-md text-lg"
          >
            Recruiter
          </button>
          <button
            onClick={() => setTrigger(1)}
            className="bg-[#85F4FF] text-black hover:bg-[#42C2FF] hover:text-white mx-2 px-5 py-2 transition duration-700 ease-in-out hover:scale-105 rounded-xl shadow-md text-lg"
          >
            Candidate
          </button>
        </div>
        <div className="lg:mx-40 mx-5 mt-10 text-center">
          <h1 className="lg:text-3xl text-xl bg-slate-500 rounded-2xl font-semibold text-white">
            Disclaimer
          </h1>
          <RiDoubleQuotesR className="w-10 h-10 text-pink-500 relative top-6" />
          <p className="text-slate-400 dark:text-slate-200 text-sm text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Zone
            will not be liable on account of any inaccuracy of information on
            this web site. It is the responsibility of the visitor to further
            research the information on the site. Any breach of privacy or of
            the information provided by the consumer to Corporate Zone to be
            placed on the website by technical or any other means is not the
            responsibility of Corporate Zone. Corporate Zone does not guarantee
            confidentiality of information provided to it by any person
            acquiring/using all/any information displayed on the Corporate Zone
            Website. Thank you all...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden lg:block">
            <Image
              src="https://i.ibb.co/sbjhBZG/rules.png"
              width={2000}
              height={2000}
              alt="rules img"
            />
          </div>
          <div>{trigger ? recruiter : candidate}</div>
        </div>
      </div>
    </>
  );
};

export default Rule;
