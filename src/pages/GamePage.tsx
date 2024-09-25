import { FC, useState } from "react";
import GamePreview from "../components/GamePreview";
import AppGame from "../components/AppGame";
import LoseGame from "../components/LoseGame";

const GamePage: FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isLose, setIsLose] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  return (
    <div className="page game-page">
      <div className="container game-page__container">
        {!isStart ? (
          <>
            <GamePreview setIsStart={setIsStart} />
          </>
        ) : isLose ? (
          <LoseGame
            setScore={setScore}
            setIsLose={setIsLose}
            setIsStart={setIsStart}
            score={score}
          />
        ) : (
          <AppGame score={score} setScore={setScore} setIsLose={setIsLose} />
        )}
      </div>
    </div>
  );
};

export default GamePage;
