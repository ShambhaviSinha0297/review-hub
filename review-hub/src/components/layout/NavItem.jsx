import React from 'react'
import '../layout/leftBar/leftBar.css'

const NavItem = ({label, icon, className}) => {
  return (
    <div className={className}>
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  )
}

export default NavItem
