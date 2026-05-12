import React from 'react'
import Sidebar from '../../components/layout/Sidebar'
import MidLayout from '../../components/layout/MidLayout'
import './dashboard.css'
import Topbar from '../../components/layout/Header/Topbar'
import Header from '../../components/layout/Header/Header'
import Avatar from '../../components/layout/Header/Avatar'
import LeftBar from '../../components/layout/leftBar/LeftBar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Topbar
        left={
          <>
            <Header title="ReviewHub" subtitle="acme/frontend" />
          </>
        }
        right={
          <>
            <Avatar />
          </>
        }
      />
      <div className='mid-layout'>
        <Sidebar 
           content={
            <>
              <LeftBar/>
            </>
           }
        />
        <MidLayout />
      </div>
    </div>
  )
}

export default Dashboard
