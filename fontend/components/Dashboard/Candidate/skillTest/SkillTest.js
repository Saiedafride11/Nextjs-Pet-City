import { useState } from "react";
import Quiz from "./Quiz/Quiz";
import tech from "../../../../public/tech.json";
import SkillItem from "./SkillItem";
import Swal from "sweetalert2";
import { RiDoubleQuotesR } from "react-icons/ri";

const SkillTest = () =>
{
    const [state, setState] = useState(false);
    const [technology, setTechnology] = useState("");

    const startTest = (tech) =>
    {
        if (tech) {
            Swal.fire({
                title: `${tech} Assessment Test`,
                icon: "warning",
                html:
                    "<b><u>Ready? You will now be redirected!</u></b>, " +
                    "<p>This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started. Please ensure you have a stable internet connection.</p> " +
                    "<h2>Time Duration: <u><b>200 Seconds</b></u><h2/>" +
                    "<h2>No. of Questions: <u><b>10 MCQ</b></u><h2/>",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: `Let's Start!`,
            }).then((result) =>
            {
                if (result.isConfirmed) {
                    setState(true);
                    setTechnology(tech);
                }
            });
        }
    };

    return (
        <>
            {state ? (
                <Quiz technology={technology} setState={setState} />
            ) : (
                <div className="container">
                    <div className="flex justify-center items-center mb-10">
                        <div className="lg:w-1/2 text-center">
                            <h2 className="bg-slate-500 text-2xl tracking-widest text-white font-bold rounded-3xl py-1 shadow-xl">
                                INSTRUCTIONS
                            </h2>
                            <RiDoubleQuotesR className="w-10 h-10 text-pink-500 relative top-5" />
                            <p className="text-xl text-justify text-black bg-slate-300 rounded-2xl p-5">
                                This is a timed test. Each question takes 20 seconds and the
                                number of questions in each test is 10. So, Please make sure you
                                are not interrupted during the test, as the timer cannot be
                                paused once started. Please ensure you have a stable internet
                                connection. Before taking the test, please go through the FAQs
                                to resolve your queries related to the test.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl text-center bg-white text-black font-bold rounded-3xl shadow-md p-2">
                            Choose a{" "}
                            <span className="text-rose-500 font-extrabold">DOMAIN</span> from
                            the bottom in which you feel confident enough
                        </p>
                        <div className=" border-b-2 border-dotted border-red-700 relative">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10">
                                {tech.map((t) => (
                                    <div key={t.key}>
                                        <SkillItem
                                            img={t.img}
                                            tech={t.tech}
                                            startTest={startTest}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container my-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-center">
                                <p className="bg-slate-500 text-lg lg:text-xl text-white font-bold rounded-3xl p-2 shadow-xl">
                                    Are you nervous? Scared? May be a little apprehensive?{" "}
                                    <span className="text-rose-300 font-extrabold">
                                        THAT'S OK !
                                    </span>
                                </p>
                                <div className="text-xl text-justify text-slate-500 bg-rose-100 rounded-2xl p-5 mt-10 shadow-md">
                                    <p className="text-center text-lg text-rose-500 font-bold">
                                        HERE ARE A FEW TIPS TO HELP YOU !!!
                                    </p>
                                    <ul>
                                        <li>
                                            1. Each question takes 20 sec. Firstly, pace yourself and
                                            take your time!
                                        </li>
                                        <li>
                                            2. Don't worry if you don't get your desired mark. You can
                                            retake the test.
                                        </li>
                                        <li>
                                            3. And finally take it easy. I know you can do it ...
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SkillTest