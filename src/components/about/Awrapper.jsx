import React from "react"
import { awrapper } from "../../dummydata"
import img from "../../images/owner.jpeg";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const Awrapper = () => {
  return (
    <section className='overflow-hidden sm:py-5 sm:px-28 bg-[#e7effd70] bg-cover bg-center relative' style={{ backgroundImage: 'url("../../best.svg")', zIndex: -1 }}>

      <span className="flex items-center">
        <hr className="mx-1 w-4 border-t border-teal-400" />
        <span className="font-semibold text-primary text-2xl sm:text-3xl text-teal-400">
          Meet The Owner
        </span>
        <hr className="flex-grow mx-1 border-t border-teal-400" />
      </span>

      <div className="flex">
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">

          <div
            className="flex flex-col items-center lg:flex-row py-3 justify-between lg:text-left"
            data-aos="fade-up"
          >
            <div className="w-fit items-center flex flex-col lg:mx-4 justify-center border-[#e8f3ff] bg-white border rounded-xl p-2 shadow-xl">
              <img
                alt="card img"
                className="float-right rounded-xl border h-[400px] w-[300px]"
                src={img}
              />
            </div>

            <div
              className="flex-col my-2 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-2/3 px-8 border bg-white py-7 rounded-lg"

            >
              <h3 className="text-2xl text-gray-600 opacity-90 font-bold flex-row flex items-start gap-1 align-bottom w-fit">
                Hi, I am Diumerci
              </h3>
              <div>
                <p className="my-3 text-lg text-gray-600 text-justify">
                  Welcome to Easy-Learn! I am a dedicated student at San Jose State University, where I am pursuing a Bachelor's degree in Management Information Systems. With dedication to academic advancement, my mission is to equip learners of all ages with vital skills essential for success across various disciplines.
                </p>
              </div>
              <div>
                <p className="my-3 text-lg text-gray-600 text-justify flex flex-col">
                  <span className="font-semibold"> Mission Statement </span>
                  At Easy-Learn, we are committed to fostering academic excellence and skill development. Through comprehensive education and training, we empower individuals to excel in their chosen fields and adapt to the ever-evolving demands of the modern world.
                </p>
              </div>
              <div>
                <p className="my-3 text-lg text-gray-600 text-justify flex flex-col">
                  <span className="font-semibold"> Key Focus Areas</span>
                  <div className="flex">
                    <ol className="list-none flex flex-wrap gap-1">
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span> Management Information Systems
                      </li>
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span> Academic Enhancement
                      </li>
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span> Skill Development Across Disciplines
                      </li>
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span>  Offering CCNP and CompTIA Exams
                      </li>
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span> Educational Resources and Materials
                      </li>
                      <li className="w-full sm:w-auto">
                        <span className="mr-1">&#10148;</span> Personalized Academic Coaching
                      </li>
                    </ol>
                  </div>

                </p>
              </div>

              <div className="flex flex-col opacity-90">
                For inquiries or collaborations, please feel free to contact me
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2 cursor-pointer"> <span className="flex gap-1 font-semibold text-teal-700"><PhoneInTalkIcon style={{ color: 'teal' }} />Phone :</span> <span className="opacity-80">+1 (408) 312-1770</span></div>
                  <div className="flex gap-2 cursor-pointer"> <span className="flex gap-1 font-semibold text-teal-700"><EmailIcon style={{ color: 'teal' }} />Mail :</span> <span className="opacity-80">jamboes2020@gmail.com
                  </span></div>
                </div>
              </div>

              {/* <Link
                to="#"
                className="text-white cursor-pointer bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
              >
                Reach Out
                <svg
                  className="w-4 h-4 ml-1 group-hover: translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link> */}

            </div>

          </div>

        </div>

        <div className='flex flex-row border border-gray-200 overflow-x-hidden rounded-md sm:flex-col sm:w-1/3 bg-[#ffffff62]'>
          {awrapper.map((val) => {
            return (
              <div className='cursor-pointer box flex flex-col items-center justify-evenly rounded-md overflow-hidden border-gray-200 bg-[#168f5386] flex-1 sm:mx-5 mx-2 my-2 gap-1 px-1'>
                <div className='img '>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text-sm flex gap-2 text-white opacity-95 font-bold'>
                  <span className="text-[15px] font-semibold">{val.data}</span>
                  <span className="text-[15px] italic">{val.title}</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section >
  )
}

export default Awrapper
