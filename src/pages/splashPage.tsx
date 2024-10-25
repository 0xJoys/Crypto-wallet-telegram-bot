import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/Crypto wallet Logo.png"
import { FaGlobe} from 'react-icons/fa'


const splashPage = () => {
  return (
    <div className='flex flex-col justify-between bordr h-screen p-4' >
     
      <div className='flex items-center'>
        <FaGlobe  className='text-white' size={23}/>
        <select name="lang" id="lang" className='px-2 bg-transparent text-white'>
          <option value="English" selected className='bg-primaryColor'>English</option>
          <option value="English" className='bg-primaryColor'>French</option>
          <option value="English" className='bg-primaryColor'>Spanish</option>
          <option value="English" className='bg-primaryColor'>Potuguese</option>    
        </select>
      </div>
      
      <div className='flex flex-col items-center py-5 borde gap-5'>
        <img src={Logo} alt="Crypto Wallet Logo.png" />
        <div className='flex gap-5'>
          <Link to="/createDeal">
            <button className='bg-primaryColor px-5 h-11 rounded-md font-semibold text-white hover:bg-transparent hover:border hover:border-primaryColor '>
              Connect Wallet
            </button>
          </Link>
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