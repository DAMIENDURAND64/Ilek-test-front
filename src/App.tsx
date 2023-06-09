import "./App.css";
import {
  getQuestionsQuizz1,
  getQuestionsQuizz2,
  postAnswersQuizz1,
  postAnswersQuizz2,
} from "./utils/fetcher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import QuizzContainer from "./components/quizz/QuizzContainer";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </div>
  );
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/quizz1"
        element={
          <QuizzContainer
            fetchQuestions={getQuestionsQuizz1}
            postAnswer={postAnswersQuizz1}
            nextQuizz="/quizz2"
          />
        }
      />
      <Route
        path="/quizz2"
        element={
          <QuizzContainer
            fetchQuestions={getQuestionsQuizz2}
            postAnswer={postAnswersQuizz2}
          />
        }
      />
    </Routes>
  );
};

export default App;
