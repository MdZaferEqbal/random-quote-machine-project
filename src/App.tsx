import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaTumblr} from "react-icons/fa";
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const randomQuoteGenerator = ():Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
const randomColorGenerator = ():string => {
  const red   = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue  = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`
}
const transitionTime       = "all 1.5s";

function App() {
  const [quote, setQuote]             = useState<Quote>(randomQuoteGenerator())  
  const [randomColor, setRandomColor] = useState<string>(randomColorGenerator());  
  const changeQuote                   = () => {
    setQuote(randomQuoteGenerator());
    setRandomColor(randomColorGenerator());
  }

  return (
    <>
    <div className="background" style={{backgroundColor: randomColor, transition: transitionTime}}>
      <div id="quote-box">
        <div className="quote-content" style={{color:randomColor, transition: transitionTime}}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px"}}/>
            {quote.quote}
          </h2>
          <h4 id="author">
            - {quote.author}
          </h4>
        </div>
        <div className="buttons">
          <a target='_top' className='button' id='tweet-quote' 
            style={{
              backgroundColor: randomColor, 
              transition: transitionTime,
              marginRight: "10px",
            }}
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
          >
            <FaTwitter color="white"/>
          </a>
          <a target='_top' className='button'
            style={{
              backgroundColor: randomColor, 
              transition: transitionTime,
              marginRight: "10px",
            }}
            href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Benjamin%20Franklin&content=Either%20write%20something%20worth%20reading%20or%20do%20something%20worth%20writing.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
          >
            <FaTumblr color="white"/>
          </a>
          <button className='button' type='button' id="new-quote" 
            style={{backgroundColor: randomColor, transition: transitionTime}} onClick={changeQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
