import { QuizzTittleProps } from "../../type";

const QuizzTittle = ({ randomFiveQuestionsQuizz1 }: QuizzTittleProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        {randomFiveQuestionsQuizz1
          ? "Teste tes connaissances sur l'environnement :"
          : "Teste tes connaissances pour aider à proteger l'environnement :"}
      </h1>
    </div>
  );
};

export default QuizzTittle;
