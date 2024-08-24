import React from 'react';
import "./Quote.css";
import { FaQuoteLeft } from "react-icons/fa";

function Quote() {
  return (
    <div className='setion quote'>
      <p className="quote-text">
      <FaQuoteLeft style={{color: '#8c1303', marginRight: 5, fontSize: 23}} />
      Food is the universal language of love and culture, 
      bridging hearts and traditions through the flavors and aromas that bring us together. 
      Just as a recipe is more than just ingredients, life is more than just moments - 
      it's the flavor and love we add to them that makes them truly unforgettable.
      </p>
      <p className="quote-arthur">-- Ohene Gideon</p>
    </div>
  )
}

export default Quote
