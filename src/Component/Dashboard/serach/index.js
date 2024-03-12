import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css'

function Search({search, handleChange}) {
  return (
    <div className='search-flex'>
       <SearchRoundedIcon sx={{color: "var(--grey)", fontSize: "1.2rem"}}/>
       <input
        className='search-input'
        type="text" 
        placeholder='Search'
        value={search}
        onChange={(e) => handleChange(e)}
        />
    </div>
  )
}

export default Search