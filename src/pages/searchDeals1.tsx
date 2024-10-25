// import React from 'react'
import FooterMenu from '../components/footerMenu'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TonIcon from "../assets/tonIcon.png"
import USDTIcon from "../assets/usdtIcon.png"
import { faExchange } from '@fortawesome/free-solid-svg-icons/faExchange'
import WalletAddyBal from '../components/walletAddyBal'


const searchDeals1 = () => {
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

        <div className='flex flex-col gap-6'>

          <div className='borde w-full'>

            {/* Selling Amount */}

            <h2 className="text-white font-medium text-xl"> Selling Amount </h2>

            <div className='bordr border-yellow-300 flex justify-between gap-4 pt-2'>

              <div className='border w-1/2 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
                
                <img src={TonIcon} alt="" width={40} height={40} />
                <input type="select" placeholder='TON' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />

              </div>

              <input type="text" value={`$8,521.31`} placeholder='Enter Amount $' className='bg-transparent border rounded-md w-1/2 h-16 px-4 text-white text-md font-semibold' />

            </div>

          </div>

          <div className='borde w-full'>

            {/* Return Amount */}
            <h2 className="text-white font-medium text-xl">Return Amount</h2>
            <div className='bordr border-yellow-300 flex justify-between gap-4 pt-2'>
              <div className='border w-1/2 px-2 rounded-md flex flex-rol items-center text-white text-md font-semibold'>
                <img src={USDTIcon} alt="" width={40} height={40} />
                <input type="select" placeholder='USDT' className='bg-transparent borde rounded-md w-full h-10 text-white text-md font-semibold' />
              </div>
              <input type="text" value={`$10,456.86`} placeholder='Amount You Will Receive' className='bg-transparent border rounded-md w-1/2 h-16 px-4 text-white text-md font-semibold' />
            </div>
          </div>
          
          <Link to="/searchDeals2" className='mb-28'>
            <button className='bg-primaryColr border border-primaryColor w-full p-5 text-primaryColor font-semibold rounded-xl'>
              Search Now
            </button>
          </Link>

        </div>
      </div>
      <FooterMenu />
    </div>
  )
}

export default searchDeals1