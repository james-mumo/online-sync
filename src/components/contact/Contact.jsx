import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13219.961972448888!2d-118.37379391477737!3d34.0697579626821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b925980a586b%3A0xfc3bcac5051723dc!2sLa%20Brea%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2ske!4v1708136244630!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1 className="text-teal-600 font-semibold">Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4 className="text-teal-600 text-sm font-semibold">ADDRESS:</h4>
                <h5 className="opacity-70 text-gray-500">
                  1234 La Brea Ave, Los Angeles, CA 90019, USA
                </h5>
              </div>
              <div className='box'>
                <h4 className="text-teal-600 text-sm font-semibold">EMAIL:</h4>
                <p className="opacity-70"> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4 className="text-teal-600 text-sm font-semibold">PHONE:</h4>
                <p className="opacity-70"> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' className=" rounded-lg border border-teal-600" />
                <input type='email' placeholder='Email' className=" rounded-lg border border-teal-600" />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
