import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getQuestionsQuizz1, getQuestionsQuizz2 } from "./utils/fetcher";
import { Questions } from "./type";
import { RandomFiveQuestions } from "./utils/randomFiveQuestions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import QuizzContainer from "./components/quizz/QuizzContainer";
import { InfinitySpin } from "react-loader-spinner";

const queryClient = new QueryClient();

function Root() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default Root;

function App() {
  const {
    isLoading: isLoadingQuizz1,
    error: errorQuizz1,
    data: dataQuizz1,
  } = useQuery<Questions[]>({
    queryKey: ["getQuestionsQuizz1"],
    queryFn: getQuestionsQuizz1,
    staleTime: Infinity,
  });

  const {
    isLoading: isLoadingQuizz2,
    error: errorQuizz2,
    data: dataQuizz2,
  } = useQuery<Questions[]>({
    queryKey: ["getQuestionsQuizz2"],
    queryFn: getQuestionsQuizz2,
    staleTime: Infinity,
  });

  if (isLoadingQuizz1 || isLoadingQuizz2) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <InfinitySpin />
      </div>
    );
  }
  if (errorQuizz1 || errorQuizz2) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Something went wrong
      </div>
    );
  }
  if (!dataQuizz1 || !dataQuizz2) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        No questions available
      </div>
    );
  }

  const randomFiveQuestionsQuizz1 = RandomFiveQuestions(dataQuizz1);
  const randomFiveQuestionsQuizz2 = RandomFiveQuestions(dataQuizz2);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quizz1"
            element={
              <QuizzContainer
                randomFiveQuestionsQuizz1={randomFiveQuestionsQuizz1}
              />
            }
          />
          <Route
            path="/quizz2"
            element={
              <QuizzContainer
                randomFiveQuestionsQuizz2={randomFiveQuestionsQuizz2}
              />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export { App };
