import React from 'react'
import Logo from "../assets/Crypto wallet Logo.png"
import { FaGlobe} from 'react-icons/fa'
// import { FaArrow } from 'react-icons/fa'


const splashPage = () => {
  return (
    <div className='flex flex-col justify-between bordr h-screen ' >
      <div className='borde'>
        <h3 className='text-white flex gap-1 items-center'>
          <FaGlobe size={20} />
          English
          {/* <FaArrowDown /> */}
        </h3>
      </div>
      <div className='flex flex-col items-center py-5 borde gap-5'>
        <img src={Logo} alt="Crypto Wallet Logo.png" />
        <div className='flex gap-5'>
          <button className='bg-primaryColor px-5 h-11 rounded-md font-semibold text-white hover:bg-transparent hover:border hover:border-primaryColor '>
            Connect Wallet
          </button>
          <button className='border border-primaryColor px-5 h-11 rounded-md font-medium text-primaryColor hover:bg-primaryColor hover:text-white'>
            Visit Website
          </button>
        </div>
      </div>
      <div className='flex borde justify-center items-center'>
        <p className='text-primaryColor'>Continue without Wallet</p>
      </div>
    </div>
  )
}

export default splashPage