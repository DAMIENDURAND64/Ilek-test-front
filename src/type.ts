import { ReactNode } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type QuizzContainerProps = {
  fetchQuestions: () => Promise<Questions[]>;
  postAnswer: (responses: Response) => Promise<Result>;
  nextQuizz?: string;
};
export type QuizzViewsProps = {
  quizzData: Questions[];
  resultQuizz: Result | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: Response) => Promise<void>;
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

export type Result = {
  correctAnswersCount: number;
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
