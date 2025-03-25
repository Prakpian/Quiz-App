import React, { useState } from "react";
import Button from "../components/Button";

function QuizPage({ questionData }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const shuffleQuestions = (correctAnswer, incorrectAnswer) => {
    const allQuestions = [...incorrectAnswer];
    const randomIndex = Math.floor(Math.random() * 5);
    allQuestions.splice(randomIndex, 0, correctAnswer);
    return allQuestions;
  };
  const displayQuestion = shuffleQuestions(
    questionData[questionIndex].correct_answer,
    questionData[questionIndex].incorrect_answers
  );
  return (
    <div className="place-items-center mx-5">
      <h1 className="text-6xl md:text-8xl font-bold text-center my-10">
        Quizster
      </h1>
      <div className="flex border-5 max-w-[980px] justify-between flex-col md:flex-row">
        <div className="flex flex-col p-10 gap-5 md:gap-10 lg:gap-20">
          <h2 className="text-5xl font-bold">{questionIndex + 1}/10</h2>
          <p className="text-2xl font-bold">
            {questionData[questionIndex].question}
          </p>
          <Button btnText={"Next question"} />
        </div>
        <div className="grid gird-rows-4 md:grid-cols-[250px_minmax(250px,1fr)]">
          <div className="h-40 md:h-[240px] md:border-l-5 border-b-5 md:border-b-none border-t-5 md:border-t-0">
            <p className="text-bold text-5xl h-[60%] text-center place-content-center">
              1
            </p>
            <p className="h-[40%] text-center place-content-center border border-t-5 bg-(--color-secondary) hover:bg-(--hover)">
              {displayQuestion[0]}
            </p>
          </div>
          <div className="h-40 md:h-[240px] md:border-l-5 border-b-5 md:border-b-none">
            <p className="text-bold text-5xl h-[60%] text-center place-content-center">
              2
            </p>
            <p className="h-[40%] text-center place-content-center border border-t-5 bg-(--color-secondary) hover:bg-(--hover)">
              {displayQuestion[1]}
            </p>
          </div>
          <div className="h-40 md:h-[240px] md:border-l-5 border-b-5 md:border-b-0">
            <p className="text-bold text-5xl h-[60%] text-center place-content-center">
              3
            </p>
            <p className="h-[40%] text-center place-content-center border border-t-5 bg-(--color-secondary) hover:bg-(--hover)">
              {displayQuestion[2]}
            </p>
          </div>
          <div className="h-40 md:h-[240px] md:border-l-5">
            <p className="text-bold text-5xl h-[60%] text-center place-content-center">
              4
            </p>
            <p className="h-[40%] text-center place-content-center border border-t-5 bg-(--color-secondary) hover:bg-(--hover)">
              {displayQuestion[3]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
