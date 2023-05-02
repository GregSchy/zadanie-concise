import React, { useState } from "react";
import { useSelector } from "react-redux";

const CardSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = useSelector((state) => state.cards);

  const handleCardClick = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <div className="card-slider">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card-slider__card ${
            index === currentCardIndex && "card-slider__card--current"
          }`}
          onClick={() => handleCardClick(index)}
        >
          <img src={card.image} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
