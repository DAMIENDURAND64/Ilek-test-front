import { useNavigate } from "react-router-dom";
import Button from "../Button";
import QuizzTittle from "./QuizzTittle";
import { QuizzViewsProps } from "../../type";
import QuizzQuestions from "./QuizzQuestions";

const QuizzView = ({
  randomFiveQuestionsQuizz1,
  randomFiveQuestionsQuizz2,
  handleSubmit,
  onSubmit,
  register,
  isAllQuestionsAnswered,
  resultQuizz1,
  resultQuizz2,
}: QuizzViewsProps) => {
  const navigate = useNavigate();

  const handleStartQuizz2 = () => {
    navigate("/quizz2");
  };
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
            {randomFiveQuestionsQuizz1 && resultQuizz1 && (
              <div>
                <p>Score: {resultQuizz1.correctAnswersCount * 20} / 100 !!</p>
              </div>
            )}
            {randomFiveQuestionsQuizz2 && resultQuizz2 && (
              <div>
                <p>Score: {resultQuizz2.correctAnswersCount * 20} / 1 !!</p>
              </div>
            )}
          </div>
        </form>

        <div>
          {randomFiveQuestionsQuizz1 && (
            <p
              onClick={handleStartQuizz2}
              className="text-xs underline text-blue-600 cursor-pointer"
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
