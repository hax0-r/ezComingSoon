import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import './App.css'
import { Snowfall } from 'react-snowfall'
import { Link } from 'react-router-dom'
import { FiYoutube } from 'react-icons/fi'

function App() {

  return (
    <>
      <Link to={"https://api.whatsapp.com/send/?phone=%2B923201091220&text&type=phone_number&app_absent=0"} target='_blank'>
        <FaWhatsapp className='fixed bottom-8 right-6 cursor-pointer text-5xl text-white' />
      </Link>
      <Snowfall
        color='#ffffffc1'
        snowflakeCount={100}
        className="absolute top-0 left-0 w-full h-full" />
      <div className="bg-black w-screen h-screen">
        <div className="max-w-[75rem] m-auto text-white px-10">
          <div className="flex justify-around items-center flex-col h-screen">
            <h1 className='text-xl'>EZ Brand Builders</h1>
            <div className="text-center">
              <h2 className='text-5xl font-bold pb-3'>Website</h2>
              <p className='font-semibold'>Under Contruction</p>
              <p className='text-[#ffffffa2] tracking-wider' >Please come back later</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link target='_blank' to={"https://www.linkedin.com/company/ez-brand-builders/"}>
                <FaLinkedinIn className='text-xl cursor-pointer' />
              </Link>
              <Link target='_blank' to={"https://www.instagram.com/ez.brandbuilders/"}>
                <FaInstagram className='text-xl cursor-pointer' />
              </Link>
              <Link target='_blank' to={"https://www.facebook.com/ez.brandbuilders"}>
                <FaFacebookF className='text-xl cursor-pointer' />
              </Link>
              <FiYoutube target='_blank' to={"https://www.youtube.com/ez.brandbuilders"} className='text-xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
