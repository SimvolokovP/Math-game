import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


interface LoseGameProps {
  score: number;
  setIsStart: (value: boolean) => void;
  setIsLose: (value: boolean) => void;
  setScore: (value: number) => void;
}

const LoseGame: FC<LoseGameProps> = ({
  score,
  setIsLose,
  setIsStart,
  setScore,
}) => {

  const resetGame = () => {
    setIsStart(true);
    setIsLose(false);
    setScore(0);
  };

  return (
    <>
      <div className="game-page__chapter">
        <Link to={"/"}>
          <FaArrowLeft size={32} />
        </Link>
        <div>Your score: </div>
      </div>
      <div className="game-page__score">{score}</div>
      <button className="btn" onClick={resetGame}>
        Play again
      </button>
    </>
  );
};

export default LoseGame;
