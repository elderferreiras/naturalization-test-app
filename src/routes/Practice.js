import React, { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { Row, Col, Button } from 'react-bootstrap'

import { questions as civicsTest } from '../data/civics.test';
import Card from '../components/Card';

const Practice = () => {
  const [questions, setQuestions] = useState(civicsTest);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setQuestions(shuffle(civicsTest))
  }, []);

  const onNextQuestion = () => {
    const newIndex = currentIndex + 1 >= questions.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Row>
      <Col>
        {questions.map(({ question, answers}, index) => (
          <Card
            visible={index === currentIndex}
            question={question}
            answers={answers}
          />
        ))}
        <Button variant="primary" size="lg" onClick={onNextQuestion}>
          Next
        </Button>
      </Col>
    </Row>
  )
};

export default Practice
