import React from 'react'
import FooterMenu from '../components/footerMenu'
import { FaAngleDown, FaCopy, FaEyeSlash, FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TonIcon from "../assets/tonIcon.png"
import USDTIcon from "../assets/usdtIcon.png"
import MetaMaskIcon from "../assets/metamaskIcon.png"
import { faExchange } from '@fortawesome/free-solid-svg-icons/faExchange'
import WalletAddyBal from '../components/walletAddyBal'


const searchDeals2 = () => {
  return (
    <div className='flex flex-col h-fit px-3 py-5 gap-4 items-center'>
      <div className='borde w-full'>

        <div className='flex flex-col gap-3 mb-10 borde'>
          
          <WalletAddyBal />
          
          <div className='borde w-full'>

            {/* Search Deals */}

            <div className='bordr border-yellow-300 flex justify-between items-center gap-3 pt-2'>
              
              <div className='border w-1/2 h-16 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
                
                <img src={USDTIcon} alt="" width={40} height={40} />

                <input type="select" placeholder='Search Token' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />

              </div>

              <div className='flex flex-col text-BgColor items-center max-w-24 bottom-4'>
                <FontAwesomeIcon icon={faExchange} size="1x" className='bg-primaryColor drop-shadow-lg p-3 rounded-md' />
                {/* <p className='font-semibold text-BgColor'>Create Deal</p> */}
              </div>
              
              <div className='border w-1/2 h-16 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
                
                <img src={TonIcon} alt="" width={40} height={40} />

                <input type="select" placeholder='Search Token' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />

              </div>

            </div>

          </div>

        </div>

        <div className='flex justify-between px-10 text-xl  font-bold items-center borde mb-3'>
          <h1 className='text-primaryColor'> Buy Deals</h1>
          <h1 className='text-white'> Sell Deals</h1>
        </div>
        <hr />

        <div className='flex flex-col gap-4 w-full borde h-fit pb-20 mt-3'>

          <div className=' max-w-full h-fit px-2 py-2 flex flex-col gap-1 items-cente border rounded-xl '>
            <div className='flex items-center justify-between gap-1 borde w-full'>
              <div className='w- borde h-10 flex items-center text-white text-sm font-semibold '>
                <img src={TonIcon} alt="" width={30} height={30} />
                <h1>1000</h1>
                <h1 className='text-gray-400'>(Ton)</h1>
              </div>
              <div className=' w-1/3 border border-primaryColor py-2 flex justify-center items-center rounded-md '>
                <h2 className='text-primaryColor text-xs'>Get Deal Now</h2>
              </div>
              <div className='w- borde h-10 flex items-center text-white text-sm font-semibold '>
                <img src={USDTIcon} alt="" width={30} height={30} />
                <h1 >8000</h1>
                <h1 className='text-gray-400'>(USDT)</h1>
              </div>
            </div>
            <h1 className='text-white text-xs flex gap-1 items-center justify-center'> <span className='text-green-500'> ● </span> Available Deal: <span className='text-green-500'>2 Weeks </span></h1>
          </div>
          
          <div className=' max-w-full h-fit px-2 py-2 flex flex-col gap-1 items-cente border rounded-xl '>
            <div className='flex items-center justify-between gap-1 borde w-full'>
              <div className='w- borde h-10 flex items-center text-white text-sm font-semibold '>
                <img src={TonIcon} alt="" width={30} height={30} />
                <h1>1000</h1>
                <h1 className='text-gray-400'>(Ton)</h1>
              </div>
              <div className=' w-1/3 border border-primaryColor py-2 flex justify-center items-center rounded-md '>
                <h2 className='text-primaryColor text-xs'>Get Deal Now</h2>
              </div>
              <div className='w- borde h-10 flex items-center text-white text-sm font-semibold '>
                <img src={USDTIcon} alt="" width={30} height={30} />
                <h1 >8000</h1>
                <h1 className='text-gray-400'>(USDT)</h1>
              </div>
            </div>
            <h1 className='text-white text-xs flex gap-1 items-center justify-center'> <span className='text-green-500'> ● </span> Available Deal: <span className='text-green-500'>2 Weeks </span></h1>
          </div>
          
        </div>

      </div>
      <FooterMenu />
    </div>
  )
}

export default searchDeals2