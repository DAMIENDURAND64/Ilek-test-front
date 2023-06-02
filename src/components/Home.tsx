import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/quizz1");
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col justify-center items-center gap-10 p-5">
        <h2 className="text-center">
          Bienvenue sur le test Ilek qui va mettre au défi tes connaissances sur
          l'environnement ! Le score maximum est de 100 points. A toi de jouer
          !!
        </h2>
        <Button
          type="button"
          onClick={handleStartTest}
          label="Commencer le test"
        />
      </div>
    </div>
  );
};

export default Home;
