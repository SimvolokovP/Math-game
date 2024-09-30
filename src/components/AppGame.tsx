import { FC, useEffect, useState } from "react";
import { answers, equations } from "../utils/utils";
import { IUser } from "../models/IUser";
import UsersService from "../api/firebaseApi";

interface AppGameProps {
  setIsLose: (value: boolean) => void;
  setScore: (value: number) => void;
  score: number;
  currentUser: IUser;
  setCurrentUser: (user: IUser) => void; 
  isLose: boolean
}

const AppGame: FC<AppGameProps> = ({
  setIsLose,
  setScore,
  score,
  currentUser,
  setCurrentUser,
}) => {
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

  const handleScoreUpdate = async () => {
    if (score > currentUser.score) {
      console.log(score, currentUser.score);
      await UsersService.updateUserScore(currentUser, score);

      // Optionally update the currentUser state if needed
      setCurrentUser({ ...currentUser, score }); // Update score in the currentUser
    }
  };

  const checkAnswer = (ans: number) => {
    if (ans === currentEquation.answer) {
      setScore(score + 1);
      const newCount = correctAnswersCount + 1;
      setCorrectAnswersCount(newCount);

      if (newCount >= 5) {
        setCurrentLevel(currentLevel + 1); // Увеличение уровня
        setCorrectAnswersCount(0);
      }

      setTimer(3); // Сброс таймера
      setCurrentEquation(getRandomEquation(currentLevel));
    } else {
      setTimer(0); // Если ответ неправильный, заканчиваем таймер
    }
  };

  useEffect(() => {
    if (timer === 0) {
      handleScoreUpdate(); // Проверка и обновление счета при окончании таймера
      setIsLose(true);
    } else {
      const interval = setInterval(() => {
        setAnimate(true);
        setTimer((prev) => prev - 1);

        setTimeout(() => setAnimate(false), 300);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, setIsLose, score, currentUser]);

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
