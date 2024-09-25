import { FC } from "react";
import { PiMathOperationsBold } from "react-icons/pi";
import { useTg } from "../hooks/useTg";
import { LiaHandSpockSolid } from "react-icons/lia";
import AppNavigation from "../components/AppNavigation";

const MainPage: FC = () => {
  const { user } = useTg();

  return (
    <div className="page main-page">
      <div className="container main-page__container">
        <div className="main-page__chapter">
          <div>
            {user ? (
              <>
                user?.username <LiaHandSpockSolid />
              </>
            ) : (
              "Account not found"
            )}
          </div>
          <h1 className="main-page__logo">
            Math Game <PiMathOperationsBold />
          </h1>
        </div>
        <AppNavigation />
        <div>
          git:{" "}
          <a href="https://github.com/SimvolokovP">
            https://github.com/SimvolokovP
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
