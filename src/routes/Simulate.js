import React, { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { Row, Col, Button } from 'react-bootstrap'

import { questions as civicsTest } from '../data/civics.test';
import Voice from '../components/Voice';

const Simulate = () => {
  const [questions, setQuestions] = useState(civicsTest);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    setQuestions(shuffle(civicsTest))
  }, []);

  const onNextQuestion = () => {
    const newIndex = currentIndex + 1 >= questions.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const logCorrectAnswer = (answer) => {
    const updatedCorrectAnswers = correctAnswers + 1
    setCorrectAnswers(updatedCorrectAnswers)
  }

  return (
    <Row>
      <Col>
        {questions.map(({ question, answers}, index) => (
          <Voice
            key={question}
            visible={index === currentIndex}
            question={question}
            answers={answers}
            logCorrectAnswer={logCorrectAnswer}
          />
        ))}
        <Button variant="primary" size="lg" onClick={onNextQuestion}>
          Next
        </Button>
      </Col>
    </Row>
  )
};

export default Simulate
