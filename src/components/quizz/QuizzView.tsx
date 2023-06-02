import Button from "../Button";
import QuizzTittle from "./QuizzTittle";
import { QuizzViewsProps } from "../../type";
import QuizzQuestions from "./QuizzQuestions";
import QuizzResult from "./QuizzResult";

const QuizzView = ({
  randomFiveQuestionsQuizz1,
  randomFiveQuestionsQuizz2,
  handleSubmit,
  onSubmit,
  register,
  isAllQuestionsAnswered,
  resultQuizz1,
  resultQuizz2,
  handleStartQuizz2,
  handleRefetchData,
}: QuizzViewsProps) => {
  return (
    <div className="flex flex-col items-center gap-10 p-5 w-screen h-full">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <QuizzTittle
              randomFiveQuestionsQuizz1={randomFiveQuestionsQuizz1}
            />
            {randomFiveQuestionsQuizz1?.map((question) => (
              <QuizzQuestions
                key={question.id}
                question={question}
                register={register}
              />
            ))}
            {randomFiveQuestionsQuizz2?.map((question) => (
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
            {isAllQuestionsAnswered &&
              randomFiveQuestionsQuizz1 &&
              resultQuizz1 && (
                <QuizzResult
                  resultQuizz={resultQuizz1}
                  handleRefetchData={handleRefetchData}
                />
              )}
            {isAllQuestionsAnswered &&
              randomFiveQuestionsQuizz2 &&
              resultQuizz2 && (
                <QuizzResult
                  resultQuizz={resultQuizz2}
                  handleRefetchData={handleRefetchData}
                />
              )}
          </div>
        </form>

        <div>
          {randomFiveQuestionsQuizz1 && (
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
