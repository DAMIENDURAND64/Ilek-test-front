import { useEffect, useState } from "react";
import { QuizzContainerProps, Result } from "../../type";
import { FieldValues, useForm } from "react-hook-form";
import { postAnswersQuizz1, postAnswersQuizz2 } from "../../utils/fetcher";

import QuizzView from "./QuizzView";

const QuizzContainer = ({
  randomFiveQuestionsQuizz1,
  randomFiveQuestionsQuizz2,
}: QuizzContainerProps) => {
  const { register, handleSubmit, watch } = useForm();
  const [resultQuizz1, setResultQuizz1] = useState<Result>();
  const [resultQuizz2, setResultQuizz2] = useState<Result>();
  const [isAllQuestionsAnswered, setIsAllQuestionsAnswered] = useState(false);

  const answers = watch();

  useEffect(() => {
    let allAnswered;

    if (randomFiveQuestionsQuizz1) {
      allAnswered = randomFiveQuestionsQuizz1.every(
        (question) => answers[`question${question.id}`] !== null
      );
    } else if (randomFiveQuestionsQuizz2) {
      allAnswered = randomFiveQuestionsQuizz2.every(
        (question) => answers[`question${question.id}`] !== null
      );
    }

    setIsAllQuestionsAnswered(!!allAnswered);
  }, [answers, randomFiveQuestionsQuizz1, randomFiveQuestionsQuizz2]);

  const onSubmit = async (data: FieldValues) => {
    const selectedQuizz =
      randomFiveQuestionsQuizz1 || randomFiveQuestionsQuizz2;
    const postAnswers = randomFiveQuestionsQuizz1
      ? postAnswersQuizz1
      : postAnswersQuizz2;
    const setResult = randomFiveQuestionsQuizz1
      ? setResultQuizz1
      : setResultQuizz2;

    if (!selectedQuizz || !postAnswers) {
      console.error("No quiz selected or no answer function provided");
      return;
    }

    const responses = selectedQuizz.map((question) => {
      const selectedAnswerId = parseInt(data[`question${question.id}`]);
      return {
        questionId: question.id,
        answerId: selectedAnswerId,
      };
    });

    try {
      const result = await postAnswers(responses);
      setResult(result);
    } catch (error) {
      console.error("Error submitting answers", error);
    }
  };

  return (
    <QuizzView
      randomFiveQuestionsQuizz1={randomFiveQuestionsQuizz1}
      randomFiveQuestionsQuizz2={randomFiveQuestionsQuizz2}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      resultQuizz1={resultQuizz1}
      resultQuizz2={resultQuizz2}
      isAllQuestionsAnswered={isAllQuestionsAnswered}
    />
  );
};

export default QuizzContainer;
