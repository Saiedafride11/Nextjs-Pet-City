import React from 'react'

const Marquee = ({direction}) => {
  return (
    <>
    <div className='my-2'>
        <marquee behavior="scroll" direction={direction}>
            <h1 className="text-white flex text-2xl font-extrabold">
            Start And Join For{" "}
            <span className=" text-2xl font-extrabold  pl-3">
                <span className="text-pink-500">Co</span>rporate Zo
                <span className="text-cyan-500">ne</span>
            </span>
            </h1>
        </marquee>
    </div>
    </>
  )
}

export default Marquee;