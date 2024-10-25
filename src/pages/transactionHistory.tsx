import React from 'react'
import FooterMenu from '../components/footerMenu'
import TonIcon from "../assets/tonIcon.png"
import USDTIcon from "../assets/usdtIcon.png"
import WalletAddyBal from '../components/walletAddyBal'

const transactionHistory = () => {
  return (
    <div className='flex flex-col h-fit px-2 py-5 mb-40 gap-5 items-center'>
      <div className='w-full'>
        <WalletAddyBal />
      </div>
      {/* Trasaction Session */}
      <div className='text-gray-400 w-full px-3 py-4 border rounded-xl text-sm font-semibold italic'>
        <div className='flex items-center gap-1 borde w-full my-2'>
            <h2 className='flex-grow'>Transaction Fee:</h2>
            <h2>0.5%</h2>
          </div>
          <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <img src={TonIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Send:</h2>
              <h2>$9,029.94 (TON)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
            <img src={USDTIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Received</h2>
              <h2>$20,429.94 (USDT)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Buyer Wallet:</h2>
              <h2>1A1zP1eP.....mv7DivfNa</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Seller Wallet:</h2>
              <h2>mv7DivfNa....1A1zP1eP</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Deal Expiry:</h2>
              <h2>24-05-2024</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Date And Time:</h2>
              <h2>12-04-2024; 03:45:27</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Status</h2>
              <h1 className='text-green-500 flex gap-1 items-center justify-center mt-1'> Completed</h1>
        </div>
      </div> 


      <div className='text-gray-400 w-full px-3 py-4 border rounded-xl text-sm font-semibold italic'>
        <div className='flex items-center gap-1 borde w-full my-2'>
            <h2 className='flex-grow'>Transaction Fee:</h2>
            <h2>0.5%</h2>
          </div>
          <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <img src={TonIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Send:</h2>
              <h2>$9,029.94 (TON)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
            <img src={USDTIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Received</h2>
              <h2>$20,429.94 (USDT)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Buyer Wallet:</h2>
              <h2>1A1zP1eP.....mv7DivfNa</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Seller Wallet:</h2>
              <h2>mv7DivfNa....1A1zP1eP</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Deal Expiry:</h2>
              <h2>24-05-2024</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Date And Time:</h2>
              <h2>12-04-2024; 03:45:27</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Status</h2>
              <h1 className='text-red-500 flex gap-1 items-center justify-center mt-1'> Cancled</h1>
        </div>
      </div>
      
      <div className='text-gray-400 w-full px-3 py-4 border rounded-xl text-sm font-semibold italic'>
        <div className='flex items-center gap-1 borde w-full my-2'>
            <h2 className='flex-grow'>Transaction Fee:</h2>
            <h2>0.5%</h2>
          </div>
          <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <img src={TonIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Send:</h2>
              <h2>$9,029.94 (TON)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
            <img src={USDTIcon} alt="" width={30} height={30}/>
              <h2 className='flex-grow'>Coin Received</h2>
              <h2>$20,429.94 (USDT)</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Buyer Wallet:</h2>
              <h2>1A1zP1eP.....mv7DivfNa</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Seller Wallet:</h2>
              <h2>mv7DivfNa....1A1zP1eP</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Deal Expiry:</h2>
              <h2>24-05-2024</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Date And Time:</h2>
              <h2>12-04-2024; 03:45:27</h2>
            </div>
            <hr />

            <div className='flex items-center gap-1 borde w-full my-2'>
              <h2 className='flex-grow'>Status</h2>
              <h1 className='text-yellow-500 flex gap-1 items-center justify-center mt-1'> Expired</h1>
        </div>
      </div> 
      <FooterMenu/>
    </div>
  )
}

export default transactionHistory