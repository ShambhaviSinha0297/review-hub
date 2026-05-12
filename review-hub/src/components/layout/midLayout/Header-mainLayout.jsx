import React from 'react'
import './midLayout.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AppsIcon from '@mui/icons-material/Apps';



const HeaderMainLayout = () => {
  return (
    <div className='header-midlayout'>
      <input type='text' placeholder='Search pull requests...' className='search-bar' />
      <div className='open-text'>Open</div>
      <div>Needs review</div>
      <div>Mine</div>
      <DensityMediumIcon style={{color: '#000000', fontSize: '0.75rem'}} />
      <AppsIcon style={{color: '#000000', fontSize: '0.75rem'}} />
    </div>
  )
}

export default HeaderMainLayout
