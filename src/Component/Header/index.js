import React from 'react'
import './style.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
     return (
    <div className='header-container'>
        <div className='header-title'>
          <p className='icon' onClick={()=> navigate("/product")}> 
          <ArrowBackIosNewIcon style={{ fontSize: 15 }}/></p>
          <p>Select Dishes</p>
        </div>
        <div className='header-details'>
            <p className='black'></p>
            <div className='time'>
                <div className='flextime'> 
                   <p><CalendarMonthIcon /></p> 
                   <p> 21 May 2021</p>
                </div>
                <div className='divider'></div>
                <div className='flextime'>
                  <p><AccessAlarmRoundedIcon /></p>  
                  <p>10:30 Pm-12:30 Pm</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header


