import React from 'react';

function NewQuote({ quote }) {
  return (
    quote && (
      <div className='NewQuote'>
        <h1>{quote.character}</h1>
        <h3>"{quote.quote}"</h3>
        <br />
        <img src={quote.image} alt='simpson character' height='400' />
      </div>
    )
  );
}

export default NewQuote;
