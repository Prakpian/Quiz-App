import React from "react";
import Button from "../../components/Button";

function HomePage() {
  return (
    <div className="grid justify-items-center mx-20">
      <h1 className="text-(--color-main) font-bold text-6xl sm:text-8xl">
        Quizster
      </h1>
      <p className="text-xl font-medium mt-5">
        Time to discover and test your knowledge!
      </p>
      <p className="text-xl font-medium">Out of 10, how many can you get?</p>
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
          className="border border-5 rounded-md py-2 px-4 max-w-[200px]"
        >
          <option value="allCategory" className="">
            All category
          </option>
          <option value="generalKnowledge">General Knowledge</option>
          <option value="history">History</option>
          <option value="vehicles">Vehicles</option>
          <option value="art">Art</option>
          <option value="sport">Sports</option>
          <option value="animeMange">Anime & Manga</option>
          <option value="animals">Animals</option>
          <option value="geography">Geography</option>
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
          className="border border-5 rounded-md py-2 px-4 max-w-[200px]"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Button btnText={"Test me"} />
    </div>
  );
}

export default HomePage;
