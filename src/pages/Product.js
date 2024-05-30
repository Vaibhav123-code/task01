import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';

function Product() {
  const navigate = useNavigate();

  return (
    <div className='p-wrapper'>
      <div className='pro-header'>
      <p className='icon' onClick={()=> navigate("/")}> 
          <ArrowBackIosNewIcon style={{ fontSize: 18 }}/></p>
      </div>
      <div className='p-container'>
       <div className='p-title'>
         <h1>Mashala Muglai</h1>
         <div className='rating'>
            <p >4.2 </p> 
            <p> <GradeRoundedIcon style={{fontSize:"medium"}}/></p>
        </div>
       </div>
       <div className='p-description'>
          <p>Mughlai Masala is a style of cookery developed in the 
            indian Subcontinent by the imperial kitchens of Mughal Empire.</p>
       </div>
       <div className='p-time'>
           <p><AccessAlarmRoundedIcon /></p>
            <p> 1 hour </p>
        </div>
      </div>
      <div className='p-divider'></div>
      <div className='p-logo'>
        <div className='theme'></div>
        <div className='p-img'>
          <img src='https://tse4.mm.bing.net/th?id=OIP.7mzwAAKfRNrlDNoM3a-qWwHaE7&pid=Api&P=0&h=220' alt='img'/>
        </div>
      </div>
       <div className='ingradient'>
          <h2 >Ingredients</h2>
          <p style={{fontSize:13,color:"grey",margin:0}}>For 2 people</p>
       </div>
       <hr />
       <div className='i-list'>
                <h3>Vegetables (05)</h3>
                <p> <ArrowDropDownRoundedIcon style={{ fontSize: 30 }}/></p>
          </div>
      <div className='i-table'>
         <div className='f'>
            <p>Cauliflower</p>
            <p>01 Pc</p>
         </div>
         <div className='f'>
            <p>Tomato</p>
            <p>10 Pc</p>
         </div>
         <div className='f'>
            <p>Spinch</p>
            <p>1/2 kg</p>
         </div>
      </div>
      <div className='i-list'>
                <h3>Spices (10)</h3>
                <p> <ArrowDropDownRoundedIcon style={{ fontSize: 30 }}/></p>
          </div>
          <div className='i-table'>
         <div className='f'>
            <p>Coriander</p>
            <p>100 gram</p>
         </div>
         <div className='f'>
            <p>Mustard Oil</p>
            <p>1/2 litres</p>
         </div>
      </div>
      <h2>Appliances</h2>
      <div className='appliance'>
           <div className='ref-img'>
             <KitchenIcon style={{fontSize: 70}}/>
             <p>Refrigerator</p>
           </div>
           <div className='ref-img'>
             <KitchenIcon style={{fontSize: 70}}/>
             <p>Refrigerator</p>
           </div>
           <div className='ref-img'>
             <KitchenIcon style={{fontSize: 70}}/>
             <p>Refrigerator</p>
           </div>
      </div>

    </div>
  )
}

export default Product