import { FC, useEffect, useState } from "react";
import GamePreview from "../components/GamePreview";
import AppGame from "../components/AppGame";
import LoseGame from "../components/LoseGame";
import { useTg } from "../hooks/useTg";
import { IUser } from "../models/IUser";
import UsersService from "../api/firebaseApi";

const GamePage: FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isLose, setIsLose] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const { user } = useTg();

  const [currentUser, setCurrentUser] = useState<IUser>({
    id: 1,
    name: "test",
    score: 0,
  });

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        console.log(user);
        if (user?.id) {
          // @ts-ignore
          const u = await UsersService.getUserById({
            id: user.id,
            // @ts-ignore
            name: user.username,
            score: 0,
          });
          // @ts-ignore
          setCurrentUser(u);
          console.log("cu", currentUser);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchCurrentUser();
  }, [user]);

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
          <AppGame
            isLose={isLose}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            score={score}
            setScore={setScore}
            setIsLose={setIsLose}
          />
        )}
      </div>
    </div>
  );
};

export default GamePage;
