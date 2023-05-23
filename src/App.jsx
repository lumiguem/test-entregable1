import { useState } from 'react'
import './App.css'
import dbQuotes from "./db/quote.json"
import { getRandom } from './utils/random'
import Quotebox from './components/Quotebox'
import QuoteButton from './components/QuoteButton'


const bgImages = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes));
    setBgImage(getRandom(bgImages));
    handleChangeQuote
  };
  return (

    <main className={`app ${bgImage}`}>
      <section className='app__container'>
        <h1 className='title'>INFOGALAX</h1>
        <Quotebox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />
        
      
      </section>
<section className='planetContainer'>
          <img src="/images/planeta2.png" alt="" />
            <QuoteButton handleChangeQuote={handleChangeQuote} />
            <h3>Source: {quote.author} </h3>
          </section>

    </main>

  )
}

export default App
