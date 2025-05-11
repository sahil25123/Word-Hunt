import {  Button, MenuItem, TextField, ThemeProvider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Header = ({word, setWord}) => {
  const handlesubmit = () => {
    setWord(word);
  }
    
  return (
    <div className='header'>
        <span className='title'>{word? word :"Word Hunt"}</span>
        <div className='inputs'>
        
            <TextField id="outlined-basic"
            value={word}
            onChange={(e)=>setWord(e.target.value)}
             label="Search Word" className='search' variant="outlined" />
            <Button variant="contained" onClick={handlesubmit} endIcon={<SearchIcon />}>Search</Button>
           
        </div>
      
    </div>
  )
}

export default Header
