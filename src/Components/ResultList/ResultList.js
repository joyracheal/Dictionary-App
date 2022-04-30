import React, {useState,  useEffect, useContext} from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import{InputContext} from '../../App';
import MeaningList from '../MeaningList/MeaningList';
import ExampleList from '../ExampleList/ExampleList';
import Antonym from '../Antonym/Antonym';
import Synonym from '../Synonym/Synonym';
import './App.scss';


axios.defaults.baseURL= `https://api.dictionaryapi.dev/api/v2/entries/en/`;


const ResultList = () => {
  const {data} = useContext(InputContext);
  const [response, setResponse ]= useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)


  const fetchData = async(param) => {
    try{
      setLoading(true)
      const res=await axios(`/${param}`)
      setResponse(res.data);
      setError(null)
  
    }
    catch (err){
      setError(err)
  
    }
    finally{
      setLoading(false)
    }
  
  }

  useEffect(() => {
    if(data.length) {
      fetchData (data)
    }
  }, [data])

if(loading){
  return <h3>Loading.....</h3>
}
if (error){
return<h3 className='container__text1'> No definition found</h3>
}
  
  return (

    <div className='container'>
    <Paper elevation={0} />
    {response &&(  
      <div>
      <MeaningList mean={response}/>
      <h3 className='container__text'>Example</h3>
      <ExampleList mean={response}/>
      <h3 className='container__text'>Synonym</h3>
      <Synonym mean={response}/>
      <h3 className='container__text'>Antonym</h3>
      <Antonym mean={response}/>
    </div>
    )}
  </div>
  )
};

export default ResultList;
