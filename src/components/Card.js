import ReactCardFlip from 'react-card-flip';
import React, { useEffect, useState } from 'react'

const Card = ({ question, answers, visible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false)
  }, [question]);

  if (!visible) {
    return null
  }

  const onCardClick = () => {
    setIsFlipped(!isFlipped)
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card" onClick={onCardClick}>
        {question}
      </div>

      <div className="card" onClick={onCardClick}>
        {answers.join(", ")}
      </div>
    </ReactCardFlip>
  )
};

export default Card
