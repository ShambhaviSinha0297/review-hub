import React from 'react'
import Header from './Header'
import Avatar from './Avatar'
import './header.css'

const Topbar = ({ left, right }) => {
  return (
    <div className='topbar'>
      <div className='topbar-left'>{left}</div>
      <div className='topbar-right'>{right}</div>
    </div>
  )
}

export default Topbar
