import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Ankit, LinkedIn } from "./assets/images";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">

        <div className="header_left">
        <img src={LinkedIn} alt=""/>
        
        <div className='header_search'>
            <SearchIcon/>
            <input type='text' placeholder='Search' />
        </div>
        </div>
            <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Chat'/>
            <HeaderOption Icon={NotificationsIcon} title='Notification'/>
            <HeaderOption avatar={Ankit} title='Me'/>
            </div>
        </div>
  )
}

export default Header