import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage({ setQuestionData, setIsLoading }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const fetchQuestions = async () => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&type=multiple${category}${difficulty}`
    );
    setQuestionData(res.data.results);
    setIsLoading(false);
  };
  return (
    <div className="grid justify-items-center mx-5">
      <h1 className="text-(--color-main) font-bold text-[15vw] sm:text-8xl">
        Quizster
      </h1>
      <p className="text-xl font-medium mt-5 text-center">
        Time to discover and test your knowledge!
      </p>
      <p className="text-xl font-medium mt-2 text-center">
        10 questions, how many can you get?
      </p>
      <div className="grid justify-items-center mt-10 mb-10">
        <label
          htmlFor="category-select"
          className="text-2xl font-semibold mb-2"
        >
          Category?
        </label>
        <select
          name="category"
          id="category-select"
          className="border border-5 rounded-md py-2 px-4 w-[200px] md:w-[300px]"
          onChange={(e) => setCategory("&category=" + e.target.value)}
        >
          <option value="" className="">
            All category
          </option>
          <option value="9">General Knowledge</option>
          <option value="23">History</option>
          <option value="28">Vehicles</option>
          <option value="25">Art</option>
          <option value="21">Sports</option>
          <option value="31">Anime & Manga</option>
          <option value="27">Animals</option>
          <option value="22">Geography</option>
        </select>
      </div>
      <div className="grid justify-items-center mb-10">
        <label
          htmlFor="difficulty-select"
          className="text-2xl font-semibold mb-2"
        >
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty-select"
          className="border border-5 rounded-md py-2 px-4 w-[200px] md:w-[300px]"
          onChange={(e) => setDifficulty("&difficulty=" + e.target.value)}
        >
          <option value="">Any difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Link to={"/quiz"}>
        <Button btnText={"Test me"} onClick={fetchQuestions} />
      </Link>
    </div>
  );
}

export default HomePage;
