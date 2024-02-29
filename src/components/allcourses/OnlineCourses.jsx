import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          {/* <Heading subtitle='' title='Browse Our Online Courses' /> */}
          <span className="flex items-center">
            <hr className="mx-1 w-4 border-t border-teal-400" />
            <span className="font-semibold text-primary text-2xl sm:text-3xl">
              Other Courses We Offer
            </span>
            <hr className="flex-grow mx-1 border-t border-teal-400" />
          </span>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
