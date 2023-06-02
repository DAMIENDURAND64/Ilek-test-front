import { Response } from "../type";

// GET
export const getQuestionsQuizz1 = async () => {
  const res = await fetch("/environment_questions");
  const data = await res.json();
  return data || [];
};

export const getQuestionsQuizz2 = async () => {
  const res = await fetch("/mitigation_questions");
  const data = await res.json();
  return data || [];
};

// POST
export const postAnswersQuizz1 = async (responses: Response[]) => {
  try {
    const response = await fetch("check_answers_environment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw new Error("Error posting answers");
  }
};

export const postAnswersQuizz2 = async (responses: Response[]) => {
  try {
    const response = await fetch("check_answers_mitigation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw new Error("Error posting answers");
  }
};
