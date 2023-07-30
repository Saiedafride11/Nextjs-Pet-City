import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";

const Badge = ({ badge }) =>
{
    return (
        <div className="bg-white rounded shadow-md border border-slate-100">
            <h2 className="flex justify-between font-bold text-xl tracking-widest px-2">
                {badge}
                <BsAwardFill className="text-stone-300 w-9 h-9" />
            </h2>
            <div className="flex items-center rounded">
                <div className="px-2 pb-1 flex items-center">
                    <AiFillSafetyCertificate className="text-green-500 w-7 h-7" />
                    <p className="text-xs text-neutral-500 font-bold">
                        CorporateZone Skill Test Badge
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Badge