import { useCallback, useEffect, useState } from "react";
import { Questions, QuizzContainerProps, Response, Result } from "../../type";
import { useForm } from "react-hook-form";

import QuizzView from "./QuizzView";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const QuizzContainer = ({
  fetchQuestions,
  postAnswer,
  nextQuizz,
}: QuizzContainerProps) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [resultQuizz, setResultQuizz] = useState<Result>();
  const [isAllQuestionsAnswered, setIsAllQuestionsAnswered] = useState(false);
  const [quizzData, setQuizzData] = useState<Questions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchQuestions();
      setQuizzData(result);
      setResultQuizz(undefined);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occurred while fetching questions.");
      setIsLoading(false);
    }
  }, [fetchQuestions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefetchData = () => {
    reset();
    setIsAllQuestionsAnswered(false);
    fetchData();
  };

  const answers = watch();

  useEffect(() => {
    let allAnswered;
    if (isLoading) return;

    if (quizzData) {
      allAnswered = quizzData.every(
        (question) => answers[`${question.id}`] !== null
      );
    }
    setIsAllQuestionsAnswered(!!allAnswered);
  }, [answers, quizzData, isLoading]);

  useEffect(() => {
    setIsAllQuestionsAnswered(false);
  }, [navigate]);

  const onSubmit = async (data: Response) => {
    if (!quizzData || !postAnswer) {
      console.log("Please answer all questions.");
      alert("Please answer all questions.");
      return;
    }
    try {
      const result = await postAnswer(data);
      setResultQuizz(result);
    } catch (error) {
      console.log("Error submitting answers", error);
      alert("An error occurred while submitting answers.");
    }
  };

  const handleStartQuizz2 = () => {
    navigate("/quizz2");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <InfinitySpin />
      </div>
    );
  }
  return (
    <QuizzView
      quizzData={quizzData}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      resultQuizz={resultQuizz}
      isAllQuestionsAnswered={isAllQuestionsAnswered}
      handleStartQuizz2={handleStartQuizz2}
      handleRefetchData={handleRefetchData}
      nextQuizz={nextQuizz}
    />
  );
};

export default QuizzContainer;
