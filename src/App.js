import React, {  useState,createContext } from 'react';
import "./App.scss";
import { Container } from '@mui/material';
import Header from './Components/Header/Header';
import ResultList from './Components/ResultList/ResultList';



//useContext
export const InputContext = createContext('')

const App = () => {
  const [data, setData] = useState('')
  

  const value = {
   data, setData
  }


  return (
    <InputContext.Provider value={value}>
    
    <div className='container'>
    <Container maxWidth='md' className='container__body'>
    <Header data={data} setData={setData}/>
    <ResultList/>
    </Container>
    </div>
    </InputContext.Provider>
  )
}

export default App