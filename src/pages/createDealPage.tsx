import React from 'react'
import FooterMenu from '../components/footerMenu'
import { FaAngleDown, FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'

const createDeal = () => {
  return (
    <div className='flex flex-col gap-40 items-center'>
      <div className='borde w-full h-screen px-5 py-11'> 
        <div className='flex flex-col gap-4'>
          <h2 className='text-white text-md flex gap-1 items-center'>
            Wallet Not Connected
            <FaAngleDown size={22} />
          </h2>
          <div className='flex gap-3'>
          <Link to="/createDeal">
              <button className='bg-primaryColor p-2 rounded-md font-semibold text-white hover:bg-transparent hover:border hover:border-primaryColor flex items-center '>
               <FontAwesomeIcon icon={faArrowUp } size="1x" className='pr-1' />
              Buy
            </button>
          </Link>
          <button className='border border-primaryColor p-2 rounded-md font-medium text-primaryColor hover:bg-primaryColor hover:text-white'>
              <FontAwesomeIcon icon={faArrowDown } size="1x" className='pr-1' />
              Sell
          </button>
        </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  )
}

export default createDeal