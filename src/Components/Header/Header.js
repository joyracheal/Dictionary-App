import React, { useState,useContext } from 'react';
import './Header.scss';
import OutlinedInput from '@mui/material/OutlinedInput'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { InputContext } from '../../App';
import { Container } from '@mui/material';

const Header = () => {

  const [value,setValue]= useState('');
  const {setData} = useContext(InputContext);



  const handleUserInput= e=>{
    setValue(e.target.value);
  }
//Handling search event
  const handleOnClick=()=>{
    setValue('');
    setData(value);
  }
//Handling Keydown function
  const handleOnKeyDown = (e) =>{
   if (e.key ==='Enter'){
setData(value);
setValue();
}
  }

  //  setting darkmode
const LightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

  return (
    <Container maxWidth="lg"tyle={{ backgroundColor: '#cfe8fc'}}>
    <div className='header'md={5}>
      <h1 className='header__title'>Minimal Dictionary</h1>
      <div className='header__input'>
      <ThemeProvider theme={LightTheme}>
      <Stack spacing={2} direction="row" >
        <OutlinedInput   sx={{ width: 500 }}
        size='small'
        placeholder="Search for a word"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            InputProps={{
              type: 'search',
            }}
            value={value}
            onChange={handleUserInput}
            onKeyDown={handleOnKeyDown}
         
          />
          <Button variant="contained"
           onClick={handleOnClick}
           >SEARCH</Button>
          </Stack>
          </ThemeProvider>
        
      </div>
     
    </div>
    </Container>
  )
}

export default Header