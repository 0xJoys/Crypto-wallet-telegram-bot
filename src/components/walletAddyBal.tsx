// import React from 'react'
import { FaCopy, FaEyeSlash } from 'react-icons/fa'
import MetaMaskIcon from "../assets/metamaskIcon.png"

const walletAddyBal = () => {
  return (
      <div className='text-gray-400 text-lg font-semibold flex gap-2 pb-5 items-center italic borde'>
        <div>
          <img src={MetaMaskIcon} alt="" width={50} height={50} />
              
        </div>
        <div className='borde'>
          <div className='flex flex-row items-center gap-1'>
            <h2>1A1zP1eP.....mv7DivfNa</h2>
            <FaCopy />
          </div>
          <div className='text-gray-200 text-lg font-semibold flex gap-2 items-center italic borde'>
            <h2>$63,502.68</h2>
            <FaEyeSlash />
          </div>
        </div>
      </div>
  )
}

export default walletAddyBal