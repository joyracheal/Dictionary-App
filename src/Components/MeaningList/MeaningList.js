import './App.scss';
import React from 'react';
import {useContext } from 'react';
import { InputContext } from '../../App';



const MeaningList = ({mean:word}) => {
  const {data} = useContext(InputContext);
  
  return (
    <>  
    {word?.map((value)=>{
      const meanings = value?.meanings
      return(
        <div className='result'>
            {/* first */}
            <div className='result__word'>
            {data &&(<h3 className='result__text'>{data}</h3>)}
           <div className='result__details'>
           {meanings[0]?.partOfSpeech}
           {value?.phonetics[0]?.text}
           </div> 
            <audio className="result--audio" src={value?.phonetics[0] && value?.phonetics[0]?.audio}
             controls></audio>
            </div>
            <div className='result__meaning'> 
                {meanings[0]?.definitions?.map((e)=>(
                    <p>
                        {e?.definition} 
                        </p>

                ))}
            </div>
        </div>
      )
      })}

    </>
  )
}

export default MeaningList





