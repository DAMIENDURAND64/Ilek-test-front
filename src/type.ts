import { ReactNode } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type Answer = {
  id: number;
  answer: string;
};

export type Questions = {
  id: number;
  question: string;
  answers: Answer[];
};

export type QuizzContainerProps = {
  randomFiveQuestionsQuizz1?: Questions[];
  randomFiveQuestionsQuizz2?: Questions[];
};
export type QuizzViewsProps = {
  randomFiveQuestionsQuizz1: Questions[] | undefined;
  randomFiveQuestionsQuizz2: Questions[] | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: FieldValues) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  isAllQuestionsAnswered: boolean;
  resultQuizz1?: Result;
  resultQuizz2?: Result;
};

export type QuizzQuestionsProps = {
  question: Questions;
  register: UseFormRegister<FieldValues>;
};

export type Result = {
  correctAnswersCount: number;
};

export type Response = {
  questionId: number;
  answerId: number;
};

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type QuizzTittleProps = {
  randomFiveQuestionsQuizz1?: Questions[];
};

export type LayoutProps = {
  children: ReactNode;
};
