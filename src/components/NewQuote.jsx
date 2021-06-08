import React from 'react';

function NewQuote({ quote }) {
  return (
    quote && (
      <div className='newQuote'>
        <h1 className="character">{quote.character} said :</h1>
        <h3 className="quote">"{quote.quote}"</h3>
        <br />
        <img src={quote.image} className="pic" alt='simpson character' height='400' />
      </div>
    )
  );
}

export default NewQuote;
