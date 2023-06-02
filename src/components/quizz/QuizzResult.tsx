import React from "react";
import Button from "../Button";
import { QuizzResultProps } from "../../type";

const QuizzResult = ({ resultQuizz, handleRefetchData }: QuizzResultProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p>Score: {resultQuizz.correctAnswersCount * 20} / 100 !!</p>
      <Button type="button" onClick={handleRefetchData}>
        <img src="./synchro.png" alt="refresh button" className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default QuizzResult;
