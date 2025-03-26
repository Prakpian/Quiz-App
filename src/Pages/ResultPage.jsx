import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function ResultPage({
  userScore,
  setUserScore,
  setQuestionIndex,
  setQuestionData,
  setIsLoading,
}) {
  const navigation = useNavigate();
  const reset = () => {
    setUserScore(0);
    setQuestionIndex(0);
    setQuestionData([]);
    setIsLoading(true);
    navigation("/");
  };
  return (
    <div className="place-items-center grid gap-10">
      <h1 className="text-4xl font-bold">Your Result:</h1>
      <div className="place-items-center border-5 p-10 pt-8 h-[180px]">
        <p className="text-8xl font-bold mb-5">{userScore}/10</p>
        <Button btnText={"Play again"} onClick={reset} />
      </div>
    </div>
  );
}

export default ResultPage;
