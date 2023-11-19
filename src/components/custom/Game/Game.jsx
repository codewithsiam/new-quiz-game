import React, { useState } from 'react';
import { ButtonContainer, GameCard, InnerText, QuestionLength, GridContainer } from '../../shared/AppStyles/AppStyles';
import { Button, PrimaryButton } from '@/components/base/FormButtons/FormButtons';
import { Heading2 } from '@/components/base/Typography/Typography';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 1,
  },
  {
    question: 'Which is not a number?',
    options: ['Space', '999', '7Eleven', 'Sixteen'],
    correctAnswer: 1,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Jupiter', 'Mars', 'Venus', 'Saturn'],
    correctAnswer: 1,
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctAnswer: 1,
  },
];


const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    const updatedAnswers = [...chosenAnswers];
    updatedAnswers[currentQuestion] = index;
    setChosenAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    chosenAnswers.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <GameCard>
      {showScore ? (
        <>
          <Heading2>Game Over!</Heading2>
          <p style={{ fontSize: '1rem' }}>
            Your score: {score}/{questions.length}
          </p>
        </>
      ) : (
        <>
          <QuestionLength>
            <InnerText>
              {currentQuestion + 1}/{questions.length}
            </InnerText>
          </QuestionLength>
          <Heading2>{questions[currentQuestion].question}</Heading2>
          <GridContainer>
            {questions[currentQuestion].options.map((option, index) => (
              <PrimaryButton key={index} $selected={chosenAnswers[currentQuestion] === index} onClick={() => handleAnswer(index)}>
                {option}
              </PrimaryButton>
            ))}
          </GridContainer>
          <ButtonContainer>
            {currentQuestion > 0 && <Button onClick={handlePrevious}>Previous</Button>}
            {currentQuestion < questions.length - 1 && <Button onClick={handleNext}>Next</Button>}
            {currentQuestion === questions.length - 1 && <Button onClick={handleSubmit}>Done</Button>}
          </ButtonContainer>
        </>
      )}
    </GameCard>
  );
};

export default Game;
