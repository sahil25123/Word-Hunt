import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/header';
import Defination from './components/Defination';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dic = async() => {
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      console.log(res.data);
      setMeanings(res.data)
    }
    catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (word) {
      dic();
    }
  }, [word])

  return (
    <>
      <div className='app'>
        <Container maxWidth="lg">
          <Header word={word} setWord={setWord}/>
          <Defination word={word} meanings={meanings}/>
        </Container>

      </div>
    </>
  )
}

export default App
