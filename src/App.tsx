// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import SplashPage from './pages/splashPage'
import CreateDeal from './pages/createDealPage';
import SearchDeals1 from './pages/searchDeals1';
import SearchDeal2 from './pages/searchDeal2';
import ManageDealsActiveDeal from './pages/manageDealsActiveDeal';
import ActiveDealEdit from './pages/activeDealEdit';
import ExpiredDealEdit from './pages/expiredDealEdit';
import ManageDealsExpiredDeal from './pages/manageDealsExpiredDeal';
import Settings from './pages/settings';
import TransactionHistory from './pages/transactionHistory';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path="/createDeal" element={<CreateDeal />} />
        <Route path="/searchDeals1" element={<SearchDeals1 />} />
        <Route path="/searchDeals2" element={<SearchDeal2 />} />
        <Route path="/manageDealsActiveDeal" element={<ManageDealsActiveDeal />} />
        <Route path="/manageDealsExpiredDeal" element={<ManageDealsExpiredDeal />} />
        <Route path="/activeDealEdit" element={<ActiveDealEdit />} />
        <Route path="/expiredDealEdit" element={<ExpiredDealEdit />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactionHistory" element={<TransactionHistory />} />
      </Routes>
    </>
  )
}

export default App
