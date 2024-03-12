import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import './style.css'
import Switch from '@mui/material/Switch';

function Header() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') == 'dark' ? true : false
    );

    useEffect(()=>{
       if(localStorage.getItem("theme")=== "dark"){
        setDark();
       }else {
        setLight();
       }
    },[])
   
    function changeMode(){
       if(localStorage.getItem("theme") === "dark"){
        setLight();
       } else {
        setDark();
       }
       setDarkMode(!darkMode);
    }

    const setDark = () =>{
        localStorage.setItem("theme","dark");
        document.documentElement.setAttribute("data-theme", "dark")
    }
    const setLight = () =>{
        localStorage.setItem("theme","light");
        document.documentElement.setAttribute("data-theme", "light")
    }

    
  return (
    <div className='header'>
      <h1> CryptoTracker <span style={{ color: "var(--blue)"}}>.</span></h1>
     
      <div className='links'>
      <Switch checked={darkMode} onClick={() => changeMode()}/>
      <a href='/'>
             <p className='link'>Home </p>
          </a>
          <a href='#'>
             <p className='link'>Compare </p>
          </a>
          <a href='#'>
             <p className='link'>Watchlist </p>
          </a>
          <a href='/dashboard'>
            <Button text={"dashboard"} />
          </a>

      </div>
    </div>
  )
}

export default Header