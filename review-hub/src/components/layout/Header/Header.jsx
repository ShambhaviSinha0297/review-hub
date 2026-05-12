import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <div style={{
        width: '0.75rem',
        height: '0.75rem',
        borderRadius: '10px',
        backgroundColor: '#3366ff'
      }}>
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default Header
