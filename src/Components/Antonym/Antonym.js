import React from 'react';
import'../../App.scss';

const Antonym = ({mean}) => {
  return (
    <>
   {mean?.map((value)=>{
      const meanings = value?.meanings
      return(
        <div className=' Antonym'>
        {meanings[0]?.antonyms?.map((e)=>(
                (<li>{e}</li>)   
                ))}
        </div>
      )
    })}

    </>
  );
}
 
export default Antonym;


