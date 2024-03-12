import React from 'react'
import './style.css'

function Button({text, outlined, onClick}) {
  return (
    <div > 
        <button className={outlined ? "btn-outlined" : "btn"}
            onClick={() => onClick()}
            >
            {text}
          </button>
    </div>
  )
}

export default Button