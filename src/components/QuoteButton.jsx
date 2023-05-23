import React from 'react'

const QuoteButton = ({handleChangeQuote}) => {
  return (
    <button className="quoteBox__btn" onClick={handleChangeQuote}>
    <img src="/images/update.svg" alt="" />
</button>
  )
}

export default QuoteButton