import ReactCardFlip from 'react-card-flip';
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { includes } from 'lodash'

const Voice = ({ question, answers, visible, logCorrectAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [utterance, setUtterance] = useState(new SpeechSynthesisUtterance(question))

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening();

  useEffect(() => {
    setIsFlipped(false)
  }, [question]);

  useEffect(() => {
    if (visible) {
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)
    }
  }, [visible])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!visible) {
    return null
  }

  const onCardClick = () => {
    setIsFlipped(!isFlipped)
  };

  const onStopListening = () => {
    SpeechRecognition.stopListening()
    SpeechRecognition.stopListening()

    if (includes(answers, transcript)) {
      logCorrectAnswer(true)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  };

  const cardClassnames = classNames('card', {
    'bg-success': isCorrect === true,
    'bg-danger': isCorrect === false,
  })

  return (
    <>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={cardClassnames} onClick={onCardClick}>
          {question}
        </div>

        <div className={cardClassnames} onClick={onCardClick}>
          {answers.join(", ")}
        </div>
      </ReactCardFlip>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={() => onStopListening()}
        onMouseUp={() => onStopListening()}
      >Hold to talk</button>
      <p>{transcript}</p>
    </>
  )
};

export default Voice
