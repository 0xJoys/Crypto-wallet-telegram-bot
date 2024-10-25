// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons/faArrowsDownToLine';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { Link } from 'react-router-dom';


const footerMenu = () => {
  return (
    <div className='bg-primaryColor flex flex-col justify-center w-full h-20 text-white fixed bottom-0'>
      <div className='flex justify-evenly bordr relative'>

        <Link to="/searchDeals1">
          <FontAwesomeIcon icon={faSearch} size="2x" className='bg-[#019BCB] p-3 rounded-md' />
        </Link>

        <Link to="/transactionHistory">
          <FontAwesomeIcon icon={faListCheck} size="2x" className='bg-[#019BCB] p-3 mr-5 rounded-md' /> 
        </Link>

        <Link to="/createDeal" className='absolute flex flex-col items-center max-w-24 bottom-4'>
          <FontAwesomeIcon icon={faPlus} size="2x" className='bg-primaryColor drop-shadow-lg p-4 rounded-md' /> 
          {/* <p className='font-semibold text-BgColor'>Create Deal</p> */}
        </Link >

        <Link to="/manageDealsActiveDeal">
          <FontAwesomeIcon icon={faArrowsDownToLine} size="2x" className='bg-[#019BCB] p-3 ml-5 rounded-md' />
        </Link>

        <Link to="/settings">
          <FontAwesomeIcon icon={faGear} size="2x" className='bg-[#019BCB] p-3 rounded-md' />  
        </Link>

        </div>
      </div>
  )
}

export default footerMenu