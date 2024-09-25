import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface GamePreviewProps {
  setIsStart: (value: boolean) => void;
}

const GamePreview: FC<GamePreviewProps> = ({ setIsStart }) => {
  return (
    <>
      <div className="game-page__chapter">
        <Link to={"/"}>
          <FaArrowLeft size={32} />
        </Link>
        <div>Game</div>
      </div>
      <div className="game-page__rules">
        <div>Rules</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          accusantium, culpa quaerat at laudantium ex libero! Repudiandae
          aspernatur accusamus nemo. Quisquam, explicabo esse! Accusamus magni
          atque autem, deleniti qui asperiores!
        </p>
      </div>
      <button className="btn" onClick={() => setIsStart(true)}>
        Play
      </button>
    </>
  );
};
export default GamePreview;
