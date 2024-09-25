import { FC, useEffect, useState } from "react";
import { answers, equations } from "../utils/utils";

interface AppGameProps {
  setIsLose: (value: boolean) => void;
  setScore: (value: number) => void;
  score: number;
}

const AppGame: FC<AppGameProps> = ({ setIsLose, setScore, score }) => {
  const [timer, setTimer] = useState<number>(3);
  const [animate, setAnimate] = useState<boolean>(false);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [currentEquation, setCurrentEquation] = useState(equations[0]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);

  const getRandomEquation = (level: number) => {
    const filteredEquations = equations.filter((eq) => eq.level === level);
    if (filteredEquations.length === 0) return equations[0];
    const randomIndex = Math.floor(Math.random() * filteredEquations.length);
    return filteredEquations[randomIndex];
  };

  useEffect(() => {
    setCurrentEquation(getRandomEquation(currentLevel));
  }, [currentLevel]);

  const checkAnswer = (ans: number) => {
    if (ans === currentEquation.answer) {
      setScore(score + 1);
      const newCount = correctAnswersCount + 1;
      setCorrectAnswersCount(newCount);
      if (newCount >= 5) {
        setCurrentLevel(1);
        setCorrectAnswersCount(0);
      }

      setTimer(3);
      setCurrentEquation(getRandomEquation(1));
    } else {
      setTimer(0);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setIsLose(true);
    } else {
      const interval = setInterval(() => {
        setAnimate(true);
        setTimer((prev) => prev - 1);

        setTimeout(() => setAnimate(false), 300);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, setIsLose]);

  return (
    <>
      <div className={`game-page__timer timer ${animate ? "animate" : ""}`}>
        {timer}
      </div>
      <div className="game-page__equation">{currentEquation?.equation}</div>
      <ul className="game-page__answers list-reset">
        {answers.map((ans) => (
          <li key={ans}>
            <button onClick={() => checkAnswer(ans)} className="btn">
              {ans}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppGame;
