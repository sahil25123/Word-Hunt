import { createTheme, TextField, ThemeProvider } from '@mui/material'
import React from 'react'

const Header = () => {
    

  return (
    <div className='header'>
        <span className='title'>Word Hunt</span>
        <div className='inputs'>
        
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           
        </div>
      
    </div>
  )
}

export default Header
