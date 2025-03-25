import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import LoadingPage from "./Pages/LoadingPage";

function App() {
  const [questionData, setQuestionData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-(--bg) h-screen w-full font-montserrat text-(--color-main) place-content-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setQuestionData={setQuestionData}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            isLoading ? (
              <LoadingPage />
            ) : (
              questionData && <QuizPage questionData={questionData} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
