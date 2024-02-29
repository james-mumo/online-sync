import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='border bg-white rounded-md py-2 flex flex-col flex-1'>
          <span className="bg-teal-600 w-full text-white py-2 flex items-center justify-center font-semibold mt-3">{val.name}</span>
          <div className="flex flex-row border w-full justify-center text-2xl gap-1 mt-4">
            <span className="text-teal-900">$</span>
            <span className="text-teal-800 font-semibold"> {val.price}</span>
            <span className="text-teal-800 font-semibold"> {val.val}</span>
          </div>
          <p className="px-3  text-justify ">{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
