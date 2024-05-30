import React from 'react'
import './style.css'

function Cuisines() {
    const foodItem = ["Biryani","Biryani","Biryani","Biryani","Biryani","Biryani","Biryani","Biryani","Biryani","Biryani"];

  return (
    <div className='main-container'>
        <div className='food-type'>
           <p className='round-btn' style={{backgroundColor:"rgb(232, 166, 140,0.2)"}}>Italian</p>
           <p className='round-btn'>Indian</p>
           <p className='round-btn'>Spanish</p>
           <p className='round-btn'>Indian</p>
           <p className='round-btn'>Indian</p>
        </div>
        <div className='cuisine-container'>
            <h2>Popular Dishes</h2>
            <div className='scroll-container'>
           {
             foodItem.map((food)=> (
               <div className='dish-circle'>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.RkCl2QbBk6htAMvhwZswVgHaE8&pid=Api&P=0&h=220' alt='img'/>
                    <div className='f-title'>
                      <p >{food}</p>
                    </div>  
               </div>
                  
              
             ))
           }
             </div>
        </div>
    </div>
  )
}

export default Cuisines