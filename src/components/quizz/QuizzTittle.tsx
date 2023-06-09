import { QuizzTittleProps } from "../../type";

const QuizzTittle = ({ nextQuizz }: QuizzTittleProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        {nextQuizz
          ? "Teste tes connaissances sur l'environnement :"
          : "Teste tes connaissances pour aider à proteger l'environnement :"}
      </h1>
    </div>
  );
};

export default QuizzTittle;
