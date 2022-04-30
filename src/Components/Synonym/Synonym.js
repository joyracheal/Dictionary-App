import React from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';

const Synonym = ({mean}) => {
  return (
    <>
   {mean?.map((value)=>{
      const meanings = value?.meanings
      return(
        
        <Grid item xs={8}>
        <div className='Synonym'>
        {meanings[0]?.synonyms?.map((e)=>(
         <li>{e}</li>   
        ))}
        </div>
        </Grid>
        
      )
    })}

    </>
  );
}

export default Synonym