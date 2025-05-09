

import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/header';

function App() {
  const [word, setWord] = useState("");
  const [meanings , setMeanings] = useState([]);

  const dic = async() =>{
    try{
      const res = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/boat")
      console.log(res.data);
      setMeanings(res.data)

    }
    catch(e){
      console.log(e)
    
  }
}
console.log(meanings)
useEffect(() =>{
  dic();

},[])
  

  return (
    <>
      
      <div className='app'>
        <Container maxWidth="lg">
         <Header/>

          
        </Container>

      </div>
    </>
  )
}

export default App
