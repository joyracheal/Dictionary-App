import React from 'react';
import './App.scss'

const ExampleList = ({mean}) => {
  return (
    <>
   {mean?.map((value)=>{
      const meanings = value?.meanings
      return(
        <div>
        {meanings[0]?.definitions?.map((e)=>(
                  e?.example && (
                    <li className='example'>
                    {e?.example}
                    </li>)   
                ))}
        </div>
      )
    })}

    </>
  );
}

export default ExampleList