import React from 'react'
import './leftBar.css'
import NavItem from '../NavItem'

const LeftBar = () => {
    return (
        <div className='entire-leftsection'>
            <div className='each-section'>
                <div>REVIEWS</div>
                <NavItem 
                label={
                    <div className='open-pr-item'>
                        <span>Open PRs</span>
                        <span>12</span>
                    </div>
                } 
                className="each-navItem" icon={<div className='color-code-first'></div>} />
                <NavItem label="Approved" className="each-navItem" icon={<div className='color-code-second'></div>} />
                <NavItem label="Needs Change" className="each-navItem" icon={<div className='color-code-third'></div>} />
                <NavItem label="Drafts" className="each-navItem" icon={<div className='color-code-fourth'></div>} />
            </div>
            <div className='each-section'>
                <div>MY ACTIVITY</div>
                <NavItem label="Assigned to me" className="each-navItem" icon={<div className='color-code-first'></div>} />
                <NavItem label="I commented" className="each-navItem" icon={<div className='color-code-third'></div>} />
            </div>
            <div className='each-section'>
                <div>REPO</div>
                <NavItem label="Connect Repo" className="each-navItem" icon={<div className='color-code-second'></div>} />
            </div>
        </div>
    )
}

export default LeftBar
