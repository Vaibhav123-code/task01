import React, { useEffect, useState } from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import './style.css'
import axios from 'axios';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useNavigate } from 'react-router-dom';

function ProductList() {
     const [products, setproducts] = useState([]);
     const navigate = useNavigate();

     useEffect(()=> {
        axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
        .then(res => {
            const combinedArray = [...res.data.dishes, ...res.data.popularDishes];
            setproducts(combinedArray)
            console.log("arr",combinedArray);
        })
        .catch(err => {
            console.log(err);
        })
     },[])

    return (
        <div className='container'>
            <div className='p-header'>
            <div className='title-flex'>
                <h2>Recommended</h2>
                <p> <ArrowDropDownRoundedIcon style={{ fontSize: 40 }}/></p>
            </div>
            <div>
                <button className='m-btn'>Menu</button>
            </div>
            </div>
        
            <div className='dish-wrapper'>
                { 
                products.map(product => (
                    <div className='dish-container' key={product.id}>
                    <div className='dish-info'>
                        <div className='dish-title'>
                            <h3>{product.name}</h3>
                            <span><img src='https://tse1.mm.bing.net/th?id=OIP.YKGEQ7dXZorXXATfp_r_HQHaF8&pid=Api&P=0&h=220' className='sign-img'/></span>
                            <div className='rating'>
                                <p >{product.rating} </p> 
                                <p> <GradeRoundedIcon style={{fontSize:"medium"}}/></p>
                            </div>
                        </div>
                        <div className='second-row'>
                        <div className='equipments'>
                            {
                               product.equipments && product.equipments.map(e => (
                                <div className='equip'>
                                  <p><KitchenIcon/></p>
                                  <p style={{fontSize:11}}>{e}</p>
                                </div>
                               ))
                             } 
                        </div>
                        <div className='divider2'></div>
                        <div>
                            <p style={{fontWeight:600,margin:0}}>Ingredients</p>
                            <p style={{color:"orange",margin:'2px', fontWeight:600,fontSize:13,cursor:"pointer"}}
                              onClick={() => navigate(`/${product.id}`)}
                            >View list 
                            <span><ArrowForwardIosRoundedIcon style={{fontSize:"small"}} /></span>
                            </p>
                        </div>
                        </div>
                        <div className='description'> {product.description}</div>
                        </div>
                        <div className='dish-img'>
                        <img src={product.image} alt='img'/>
                        <button className='subtitle'>Add</button>
                        </div>
        
                    </div>
                    
                
                ))
            }
            </div>
        </div>
  )
}

export default ProductList