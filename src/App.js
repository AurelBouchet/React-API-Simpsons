
import './App.css';
import NewQuote from './components/NewQuote';
import { useState } from 'react';
import axios from 'axios';

const sampleQuote = [
  {
    "quote": "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  }
];

function App() {
  
  const [quote, setQuote] = useState(sampleQuote);
  
  const getQuote= () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')

      .then((response) => response.data)
      .then((data) => {
        setQuote(data);
      });
  };

  return (
    <div className="App">
     <NewQuote quote={quote[0]} />
     <button type="button" onClick={getQuote}>Get a new quote !</button>
    </div>
  );
}

export default App;
