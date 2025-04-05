import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import LoadingPage from "./Pages/LoadingPage";
import ResultPage from "./Pages/ResultPage";

function App() {
  const [questionData, setQuestionData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userScore, setUserScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [error, setError] = useState(null);

  return (
    <div className="bg-(--bg) h-screen w-full font-montserrat text-(--color-main) place-content-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setQuestionData={setQuestionData}
              setIsLoading={setIsLoading}
              setError={setError}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            error ? (
              <p className="text-center font-bold text-2xl">{error}</p>
            ) : isLoading ? (
              <LoadingPage />
            ) : (
              questionData && (
                <QuizPage
                  questionData={questionData}
                  setUserScore={setUserScore}
                  questionIndex={questionIndex}
                  setQuestionIndex={setQuestionIndex}
                />
              )
            )
          }
        />
        <Route
          path="/result"
          element={
            <ResultPage
              userScore={userScore}
              setUserScore={setUserScore}
              setQuestionIndex={setQuestionIndex}
              setQuestionData={setQuestionData}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
