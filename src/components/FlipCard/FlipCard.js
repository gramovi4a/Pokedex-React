import "./FlipCard.css"
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";


const FlipCard = ({ imageUrl, name, weight }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="pokemon-card" >
      <ReactCardFlip 
      isFlipped={isFlipped} 
      flipDirection="horizontal">
        
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
        </div>
        {/* Back side */}
        <div
          className="card-back"
          onClick={handleClick}
        >
          <h2>{name}</h2>
          

        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
