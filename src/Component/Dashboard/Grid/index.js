import React from 'react'
import {motion} from 'framer-motion'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './style.css'

function Grid({coin,delay}) {
  return (
    <div>
       <a href={`/coin/${coin.id}`}>
       <motion.div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red" }`}
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay: delay,duration:0.5}}
       >
           <div className='img-flex'>
                <img src={coin.image} className='coin-image'/>
                <div className='icon-flex'>
                   <div  className='info-flex'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                   </div>
                </div>
           </div>
           {
            coin.price_change_percentage_24h >= 0 ? (
              <div className='chip-flex'>
                   <div className='price-chip'>
                      { coin.price_change_percentage_24h.toFixed(2)}%
                   </div>
                   <div className='chip-icon'>
                       <TrendingUpRoundedIcon />
                   </div>
              </div>
            ) : (
              <div className='chip-flex'>
              <div className='price-chip red'>
                 { coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='chip-icon red'>
                  <TrendingDownRoundedIcon />
              </div>
         </div>
            )}

            {
              coin.price_change_percentage_24h  >= 0 ? (
                <p className='current-price'> 
                   { coin.current_price.toLocaleString()}   
                </p>
              ) :(
                <p className='current-price-red'> 
                { coin.current_price.toLocaleString()}   
             </p>
              )}
              <p className='coin-name'>
                 total Volume : {coin.total_volume.toLocaleString()}
              </p>
              <p className='coin-name'>
                Market Capital : {coin.market_cap.toLocaleString()}
              </p>

       </motion.div>
       </a>
    </div>
  )
}

export default Grid