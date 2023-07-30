
const InputItem = ({ type, place, name, register, errors }) =>
{
    return (
        <div>
            <p className="font-serif py-1">Enter your {name}</p>
            <input
                type={type}
                placeholder={place}
                className="w-full border rounded-lg border-gray-200 p-2 text-black focus:outline-none"
                {...register(`${name}`, { required: true })}
            />
            {errors?.email && (
                <span className="text-sm text-red-500 block">
                    {name} is required
                </span>
            )}
        </div>
    )
};

export default InputItem;