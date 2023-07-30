import Image from "next/image";

const SkillItem = ({ img, tech, startTest }) =>
{
    return (
        <div className="container">
            <div className="absolute w-32 h-32 text-center rounded-3xl shadow-xl bg-white p-4">
                <Image
                    src={img}
                    width={100}
                    height={80}
                    alt="skill test technologies"
                />
                <h2 className="text-center bg-rose-500 text-white text-sm font-thin tracking-widest rounded-3xl px-2">
                    {tech}
                </h2>
            </div>
            <div className="relative z-10 w-32 h-32 flex justify-center items-center rounded-3xl opacity-0 transition duration-700 transform hover:opacity-100 bg-rose-500 bg-opacity-30">
                <button
                    onClick={() => startTest(tech)}
                    className="bg-white text-slate-700 whitespace-nowrap text-xl shadow-xl font-semibold px-2 rounded-3xl"
                >
                    Start Test
                </button>
            </div>
        </div>
    );
};

export default SkillItem;
