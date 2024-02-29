import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"
import { homeAbout } from "../../dummydata"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';


const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row border-gray-400 rounded-lg overflow-hidden'>
            <img src='./images/img2.jpg' alt='' />
          </div>
          <div className='right row sm:py-[80px] sm:px-[50px] px-[10px] py-[40px]'>
            <Heading subtitle='Why Easy-Learn' title='Benefits About Online Learning With Us' />
            <div className='items sm:px-[20px]  sm:py-[10px]  p-1'>
              <div className='item flexSB border rounded-md overflow-hidden flex flex-col sm:flex-row p-2 cursor-pointer'>
                <div className='img flex items-center align-middle justify-center'>
                  <MenuBookIcon className="hover:text-white" sx={{ fontSize: 40, color: 'teal' }} />
                </div>
                <div className='text'>
                  <h2 className="font-semibold">{homeAbout[0].title}</h2>
                  <p>{homeAbout[0].desc}</p>
                </div>
              </div>
              <div className='item flexSB border rounded-md overflow-hidden flex flex-col sm:flex-row p-2 cursor-pointer'>
                <div className='img flex items-center align-middle justify-center'>
                  <CardMembershipIcon className="hover:text-white" sx={{ fontSize: 40, color: 'teal' }} />
                </div>
                <div className='text'>
                  <h2 className="font-semibold">{homeAbout[1].title}</h2>
                  <p>{homeAbout[1].desc}</p>
                </div>
              </div>
              <div className='item flexSB border rounded-md overflow-hidden flex flex-col sm:flex-row p-2 cursor-pointer'>
                <div className='img flex items-center align-middle justify-center'>
                  <SchoolIcon className="hover:text-white" sx={{ fontSize: 40, color: 'teal' }} />
                </div>
                <div className='text'>
                  <h2 className="font-semibold">{homeAbout[2].title}</h2>
                  <p>{homeAbout[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Awrapper />
    </>
  )
}

export default AboutCard
