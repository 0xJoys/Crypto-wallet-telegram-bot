import React from 'react'
import FooterMenu from '../components/footerMenu'
import MetaMaskIcon from "../assets/metamaskIcon.png"
import TelegramIcon from "../assets/telegramIcon.png"
import NotificationIcon from "../assets/notificationIcon.png"
import EnglishIcon from "../assets/englandFlagIcon.png"
import Globe from "../assets/globeIcon.png"
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WalletAddyBal from '../components/walletAddyBal'

const settings = () => {
  return (
    <div className='flex flex-col h-fit px-3 py-5 gap-4 items-center'>
      <div className='flex w-full flex-col gap-3 mb-20 borde'>

        
        <WalletAddyBal />
        
        <div className='flex gap-2 text-primaryColor px-1 mt-5 text-xl font-semibold items-center borde'>
          <FaAngleLeft />
          <h1 className='text-primaryColor'>Account Settings</h1>
        </div>
        <hr />

        <h1 className='text-gray-400 font-semibold'>Connected Wallet</h1>
        <div className='w-full py-4 border rounded-md px-4 flex items-center gap-3 text-sm font-semibold'>
          <img src={MetaMaskIcon} alt="" width={40} height={40} />
          <h1 className='flex-1 text-xl text-white'> MetaMask</h1>
          <h1 className='text-gray-400'> Change Wallet Address </h1>
        </div>

        <h1 className='text-gray-400 font-semibold'>Connected Account</h1>
        <div className='w-full py-4 border rounded-md px-4 flex items-center gap-3 text-sm font-semibold'>
          <img src={TelegramIcon} alt="" width={40} height={40} />
          <h1 className='flex-1 text-xl text-white'> Telegram</h1>
          <h1 className='text-gray-400'> Change Account </h1>
        </div>

        <h1 className='text-gray-400 font-semibold'>Deal Notification</h1>
        <div className='w-full py-4 border rounded-md px-4 flex items-center gap-3 text-sm font-semibold'>
          <img src={NotificationIcon} alt="" width={40} height={40} className='border p-2 bg-orange-200 rounded-sm' />
          <h1 className='flex-1 text-xl text-white'> Notification</h1>
          <h1 className='text-gray-400'> ON|OFF </h1>
        </div>

        <h1 className='text-gray-400 font-semibold'>Language Prefrences</h1>

        <div className='w-full py-4 border rounded-md px-4 flex items-center gap-3 text-sm font-semibold'>
          <img src={Globe} alt="" width={40} height={40} className='border p-2 bg-blue-200 rounded-sm' />
          <h1 className='flex-1 text-xl text-white'> Language</h1>
          <div className='flex '>
            <img src={EnglishIcon} alt="" width={30} height={20} />
            <select name="lang" id="lang" className='ml-2 px-2 bg-transparent text-white'>
              <option value="English" selected className='bg-primaryColor'>English</option>
              <option value="English" className='bg-primaryColor'>French</option>
              <option value="English" className='bg-primaryColor'>Spanish</option>
              <option value="English" className='bg-primaryColor'>Potuguese</option>
            </select>
          </div>
        </div>

        <Link to="/" className='mt-10'>
          <button className='border border-red-500 w-full p-5 text-red-500 font-bold rounded-2xl'>
            Delete Account
          </button>
            </Link>

      </div>
      <FooterMenu />
    </div>
  )
}

export default settings