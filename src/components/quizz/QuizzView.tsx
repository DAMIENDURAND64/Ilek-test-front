import Button from "../Button";
import QuizzTittle from "./QuizzTittle";
import { QuizzViewsProps } from "../../type";
import QuizzQuestions from "./QuizzQuestions";
import QuizzResult from "./QuizzResult";

const QuizzView = ({
  quizzData,
  handleSubmit,
  onSubmit,
  register,
  isAllQuestionsAnswered,
  resultQuizz,
  handleStartQuizz2,
  nextQuizz,
  handleRefetchData,
}: QuizzViewsProps) => {
  return (
    <div className="flex flex-col items-center gap-10 p-5 w-screen h-full">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <QuizzTittle nextQuizz={nextQuizz} />
            {quizzData?.map((question) => (
              <QuizzQuestions
                key={question.id}
                question={question}
                register={register}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button
              type="submit"
              label="Valider"
              disabled={!isAllQuestionsAnswered}
            />
            {isAllQuestionsAnswered && resultQuizz && (
              <QuizzResult
                resultQuizz={resultQuizz}
                handleRefetchData={handleRefetchData}
              />
            )}
          </div>
        </form>
        <div>
          {nextQuizz && (
            <p
              onClick={handleStartQuizz2}
              className="text-xs underline text-blue-600 cursor-pointer pt-2"
            >
              Passe un autre quizz pour découvrir comment tu peux aider à
              proteger l'environnement
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizzView;
