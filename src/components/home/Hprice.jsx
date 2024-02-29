import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='py-7 sm:px-28 px-2'>



        <Heading subtitle='' title='our pricing' />

        <span className="flex items-center mb-10">
          <hr className="mx-1 w-4 border-t border-teal-400" />
          <span className="font-semibold text-primary text-2xl sm:text-3xl text-teal-400">
            Pricing & Packages
          </span>
          <hr className="flex-grow mx-1 border-t border-teal-400" />
        </span>




        <div className='price container flex flex-col sm:flex-row gap-4'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
