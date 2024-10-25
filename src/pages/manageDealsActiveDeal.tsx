// import React from 'react'
import FooterMenu from '../components/footerMenu'
import { Link } from 'react-router-dom'
import TonIcon from "../assets/tonIcon.png"
import USDTIcon from "../assets/usdtIcon.png"
import { FaCircleInfo } from 'react-icons/fa6'
import WalletAddyBal from '../components/walletAddyBal'


const manageDealsActiveDeal = () => {
  return (
    <div className='flex flex-col h-fit px-3 py-5 gap-4 items-center'>
      <div className='borde w-full'>

        <div className='flex flex-col gap-3 mb-10 borde'>
          <WalletAddyBal />
        </div>

        <div className='flex justify-between px-10 text-xl font-semibold items-center borde mb-3'>

          <Link to="/manageDealsActiveDeal">
            <h1 className='text-primaryColor'> Active Deals</h1>
          </Link>

          <Link to="/manageDealsExpiredDeal">
            <h1 className='text-white'> Expired Deals</h1>
          </Link>

        </div>
        <hr />

        <div className='flex flex-col gap-4 w-full borde h-fit pb-20 mt-3'>
          
          <h1 className='text-white text-2xl font-semibold'>Deal 01</h1>
          <div className=' max-w-full h- px-2 py-2 flex gap-6 items-cente border rounded-xl '>
            <div className='w-1/2 flex flex-col justify-between borde'>
              <div className='flex flex-col justify-between borde w-full'>
                <div className='w- borde py-3 h-fit flex items-center text-white text-xl font-semibold '>
                  <img src={TonIcon} alt="" width={40} height={40} />
                  <h1>1000</h1>
                  <h1 className='text-gray-400'>(Ton)</h1>
                </div>
                
                <div className='w- borde py-3 h-fit flex items-center text-white text-xl font-semibold '>
                  <img src={USDTIcon} alt="" width={40} height={40} />
                  <h1 >8000</h1>
                  <h1 className='text-gray-400'>(USDT)</h1>
                </div>
              </div>

              <div className='flex gap-3'>
                <Link to="/activeDealEdit" className=' w-1/2 px-1 border border-primaryColor h-10 flex justify-center items-center rounded-md '>
                  <button className='text-primaryColor text-xs font-semibold' >
                    Edit Deal
                  </button>
                </Link>

                <Link to="/expiredDealEdit" className=' w-1/2 px-1 border border-red-500 h-10 flex justify-center items-center rounded-md '>
                  <button className='text-red-500 text-xs font-semibold' >
                    Delete Deal
                  </button>
                </Link>
              </div>

            </div>

            {/* Trasaction Session */}

            <div className='w-1/2 borde'>
              <div className='text-gray-400 font-semibold italic'>
                <div className='flex text-xs items-center gap-1 borde w-full my-2'>
                <FaCircleInfo />
                <h2 className='flex-grow'>Transaction Fee:</h2>
                <h2>0.5%</h2>
              </div>
              <hr />

              <div className='flex text-xs items-center gap-1 borde w-full my-2'>
                <FaCircleInfo />
                <h2 className='flex-grow'>Tax Information:</h2>
                <h2>0.01%</h2>
              </div>
              <hr />

              <div className='flex text-xs items-center gap-1 borde w-full my-2'>
                <FaCircleInfo />
                <h2 className='flex-grow'>Time Limit:</h2>
                <h2>2 hours</h2>
              </div>
              <hr />

              <div className='flex text-xs items-center gap-1 borde w-full my-2'>
                <FaCircleInfo />
                <h2 className='flex-grow'>Deal Expiry:</h2>
                <h2>3 Weeks</h2>
              </div>
              <hr />

              </div>
              <h1 className='text-white text-xs flex gap-1 items-center justify-center mt-1'> <span className='text-green-500'> ● </span> Available Deal: <span className='text-green-500'>2 Weeks </span></h1>

            </div>
            
          </div> 
          
        </div>

      </div>
      <FooterMenu />
    </div>
  )
}

export default manageDealsActiveDeal