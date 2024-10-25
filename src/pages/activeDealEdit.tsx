// import React, { useState } from 'react'
import FooterMenu from '../components/footerMenu'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TonIcon from "../assets/tonIcon.png"
import USDTIcon from "../assets/usdtIcon.png"
import { FaCircleInfo } from 'react-icons/fa6'
import WalletAddyBal from '../components/walletAddyBal'


const activeDealEdit = () => {

  return (
    <div className='flex flex-col h-fit px-3 py-5 gap-4 items-center'>
      <div className='borde w-full'>
        <WalletAddyBal />

        <div className='flex gap-2 text-primaryColor px-1 text-xl font-semibold items-center borde mb-3'>
          <FaAngleLeft />
          <h1 className='text-primaryColor'> Active Deal 01</h1>
        </div>
        <hr />

        <div className='flex flex-col gap-6 mt-5'>
          <div className='borde w-full'>
            {/* Selling Amount */}
            <h2 className="text-white font-medium text-xl"> Selling Amount </h2>
            
          <div className='bordr border-yellow-300 flex justify-between gap-4 pt-2'>
            <div className='border w-1/2 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
              <img src={TonIcon} alt="" width={40} height={40} />
              <input type="select" placeholder='TON' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />
            </div>
            
            <input type="text" value={`$8,521`} placeholder='Enter Amount $' className='bg-transparent border rounded-md w-1/2 h-16 px-4 text-white text-md font-semibold' />

          </div>

        </div>

        <div className='borde w-full'>

          {/* Return Amount */}

          <h2 className="text-white font-medium text-xl">Return Amount</h2>

          <div className='bordr border-yellow-300 flex justify-between gap-4 pt-2'>
            
            <div className='border w-1/2 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
              <img src={USDTIcon} alt="" width={40} height={40} />
              <input type="select"  placeholder='USDT' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />
            </div>
            
            <input type="text" value={`$10,456`} placeholder='Amount You Will Receive'  className='bg-transparent border rounded-md w-1/2 h-16 px-4 text-white text-md font-semibold' />

          </div>

        </div>
        
        <div className='borde w-full'>

          {/* Selet Date */}

          <h2 className="text-white font-medium text-xl">Select Date</h2>

          <div className='bordr border-yellow-300 flex justify-between gap-4 pt-2'>

            <fieldset className='borde w-1/2'>
              <legend className='text-white '>Start Date</legend>
              <input type="date" className='bg-transparent border rounded-md w-full h-16 px-4 text-white text-md font-semibold' />
            </fieldset>

            <fieldset className='borde w-1/2'>
              <legend className='text-white '>Expiry Date</legend>
              <input type="date" className='bg-transparent border rounded-md w-full h-16 px-4 text-white text-md font-semibold' />
            </fieldset>
          </div>

        </div>

        <div className='text-gray-400 font-semibold italic'>

          <div className='flex items-center gap-1 borde w-full my-1'>
            <FaCircleInfo />
            <h2 className='flex-grow'>Transaction Fee:</h2>
            <h2>0.5%</h2>
          </div>
          <hr />

          <div className='flex items-center gap-1 borde w-full my-1'>
            <FaCircleInfo />
            <h2 className='flex-grow'>Tax Information:</h2>
            <h2>0.01%</h2>
          </div>
          <hr />

          <div className='flex items-center gap-1 borde w-full my-1'>
            <FaCircleInfo />
            <h2 className='flex-grow'>Time Limit:</h2>
            <h2>2 hours</h2>
          </div>
          <hr />
          
          <div className='flex items-center gap-1 borde w-full my-1'>
            <FaCircleInfo />
            <h2 className='flex-grow'>Deal Expiry:</h2>
            <h2>3 Weeks</h2>
          </div>
          <hr />

        </div>

        <Link to="/" className='mb-28'>
          <button className='bg-primaryColor w-full p-5 text-slate-50 font-bold rounded-md'>
            Update Now
          </button>
            </Link>
          </div>
        </div>
      <FooterMenu />
    </div>
  )
}

export default activeDealEdit