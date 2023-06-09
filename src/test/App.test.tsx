import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AppRoutes } from "../App";
import { render } from "@testing-library/react";

test("render the good component on route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(screen.getByText(/Bienvenue sur le test Ilek/i)).toBeInTheDocument();
});

test("render the good component on route quizz1", async () => {
  render(
    <MemoryRouter initialEntries={["/quizz1"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const textElement = await screen.findByText(
    /Teste tes connaissances sur l'environnement/i
  );
  expect(textElement).toBeInTheDocument();
});

test("render the good component on route quizz2", async () => {
  render(
    <MemoryRouter initialEntries={["/quizz2"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const textElement = await screen.findByText(
    /Teste tes connaissances pour aider à proteger l'environnement/i
  );
  expect(textElement).toBeInTheDocument();
});
