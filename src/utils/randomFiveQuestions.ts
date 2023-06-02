import { Questions } from "../type";

export const RandomFiveQuestions = (data: Questions[]) => {
  const randomFiveQuestions: Questions[] = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomFiveQuestions.push(data[randomIndex]);
    data.splice(randomIndex, 1);
  }
  return randomFiveQuestions;
};
