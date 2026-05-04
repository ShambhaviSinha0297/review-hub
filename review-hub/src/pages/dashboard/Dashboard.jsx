import React from 'react'
import Topbar from '../../components/layout/Topbar'
import Sidebar from '../../components/layout/Sidebar'
import MidLayout from '../../components/layout/MidLayout'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Topbar />
      <div className='mid-layout'>
        <Sidebar />
        <MidLayout />
      </div>
    </div>
  )
}

export default Dashboard
