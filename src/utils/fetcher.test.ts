import fetchMock from "jest-fetch-mock";

describe("Fetcher functions", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  //test question quizz 1

  test("getQuestionsQuizz1", async () => {
    const dataTest = [
      {
        id: 104,
        question:
          "Quel est le processus de conversion des déchets en matériaux réutilisables ?",
        answers: [
          { id: 1, answer: "Charbon" },
          { id: 2, answer: "Incinération" },
          { id: 3, answer: "Enfouissement" },
        ],
      },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(dataTest));
    const response = await fetchMock("/environment_questions");
    const responseData = await response.json();
    expect(responseData).toEqual(dataTest);
    expect(fetchMock).toHaveBeenCalledWith("/environment_questions");
  });

  // test question quizz 2

  test("getQuestionsQuizz2", async () => {
    const dataTest = [
      {
        id: 6,
        question:
          "Quelle est une bonne pratique pour encourager le recyclage ?",
        answers: [
          {
            id: 1,
            answer:
              "Trier les déchets et les mettre dans les poubelles de recyclage",
          },
          { id: 2, answer: "Brûler tous les déchets pour les éliminer" },
          { id: 3, answer: "Jeter tous les déchets dans une seule poubelle" },
        ],
      },
      {
        id: 7,
        question:
          "Quelle est une bonne pratique pour favoriser l'agriculture durable ?",
        answers: [
          { id: 1, answer: "Utiliser des engrais organiques" },
          { id: 2, answer: "Utiliser massivement des pesticides chimiques" },
          { id: 3, answer: "Ignorer les bonnes pratiques agricoles" },
        ],
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(dataTest));
    const response = await fetchMock("/mitigation_questions");
    const responseData = await response.json();
    expect(responseData).toEqual(dataTest);
    expect(fetchMock).toHaveBeenCalledWith("/mitigation_questions");
  });

  // test post answer quizz 1

  test("Post answer quizz 1", async () => {
    const dataTest = [{ questionId: 1, answerId: 1 }];

    fetchMock.mockResponseOnce(JSON.stringify(dataTest));
    const response = await fetchMock("check_answers_environment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTest),
    });
    const responseData = await response.json();
    expect(responseData).toEqual(dataTest);
    expect(fetchMock).toHaveBeenCalledWith("check_answers_environment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTest),
    });
  });

  // test post answer quizz 2

  test("Post answer quizz 2", async () => {
    const dataTest = [{ questionId: 1, answerId: 1 }];

    fetchMock.mockResponseOnce(JSON.stringify(dataTest));
    const response = await fetchMock("check_answers_mitigation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTest),
    });
    const responseData = await response.json();
    expect(responseData).toEqual(dataTest);
    expect(fetchMock).toHaveBeenCalledWith("check_answers_mitigation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTest),
    });
  });
});
