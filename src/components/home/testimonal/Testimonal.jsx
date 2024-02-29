import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='' title='TESTIMONIALS' />

          <span className="flex items-center">
            <hr className="mx-1 w-4 border-t border-teal-400" />
            <span className="font-semibold text-primary text-2xl sm:text-3xl text-teal-400">
              Our Successful Students
            </span>
            <hr className="flex-grow mx-1 border-t border-teal-400" />
          </span>





          <div className='content flex flex-col sm:flex-row mt-3'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p className=" text-justify ">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
