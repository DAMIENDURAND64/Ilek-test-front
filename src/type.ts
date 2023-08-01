import { ReactNode } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type QuizzContainerProps = {
  fetchQuestions: () => Promise<Questions[]>;
  postAnswer: (responses: Payload[]) => Promise<Result>;
  nextQuizz?: string;
};
export type QuizzViewsProps = {
  quizzData: Questions[];
  resultQuizz: Result | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isAllQuestionsAnswered: boolean;
  handleRefetchData: () => void;
  handleStartQuizz2: () => void;
  nextQuizz?: string;
};

export type QuizzTittleProps = {
  nextQuizz?: string;
};

export type QuizzQuestionsProps = {
  question: Questions;
  register: UseFormRegister<FieldValues>;
};

export type QuizzResultProps = {
  resultQuizz: Result;
  handleRefetchData?: () => void;
};

export type Questions = {
  id: number;
  question: string;
  answers: Answer[];
};

export type Answer = {
  id: number;
  answer: string;
};

export type Response = {
  [key: string]: string;
};

export type Payload = {
  questionId: number;
  answer: string;
};

export type Result = {
  correctAnswers: number;
};

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
};

export type LayoutProps = {
  children: ReactNode;
};
