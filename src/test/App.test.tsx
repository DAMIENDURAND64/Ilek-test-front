// App.test.tsx

import { render, renderHook, screen, waitFor } from "@testing-library/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "../App";
import { Questions } from "../type";
import { getQuestionsQuizz1, getQuestionsQuizz2 } from "../utils/fetcher";
import { ReactNode } from "react";

test("renders loading message", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("useQuery with getQuestionsQuizz1", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(
    () =>
      useQuery<Questions[]>({
        queryKey: ["getQuestionsQuizz1"],
        queryFn: getQuestionsQuizz1,
        staleTime: Infinity,
      }),
    { wrapper }
  );

  await waitFor(() => result.current.isSuccess);
});

test("useQuery with getQuestionsQuizz2", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(
    () =>
      useQuery<Questions[]>({
        queryKey: ["getQuestionsQuizz2"],
        queryFn: getQuestionsQuizz2,
        staleTime: Infinity,
      }),
    { wrapper }
  );

  await waitFor(() => result.current.isSuccess);
});
