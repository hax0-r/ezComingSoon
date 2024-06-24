import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import './App.css'
import { Snowfall } from 'react-snowfall'

function App() {

  return (
    <>

      <FaWhatsapp className='fixed bottom-8 right-6 cursor-pointer text-5xl text-white' />
      <Snowfall
      color='#ffffffc1'
        snowflakeCount={100}
        className="absolute top-0 left-0 w-full h-full" />
      <div className="bg-black w-screen h-screen">
        <div className="max-w-[75rem] m-auto text-white px-10">
          <div className="flex justify-around items-center flex-col h-screen">
            <h1 className='text-xl'>EZ Brand Builders</h1>
            <div className="text-center">
              <h2 className='text-4xl font-bold pb-3'>Coming Soon</h2>
              <p>Be the first to know when our new site is live</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaLinkedinIn className='text-xl cursor-pointer' />
              <FaInstagram className='text-xl cursor-pointer' />
              <FaFacebookF className='text-xl cursor-pointer' />
              <FaTelegramPlane className='text-xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
