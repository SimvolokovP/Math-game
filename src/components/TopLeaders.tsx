import { FC } from "react";
import { IUser } from "../models/IUser";
import crownIcon from "../assets/icons/crown 1.svg";

interface TopLeadersProps {
  topUsers: IUser[];
}

const TopLeaders: FC<TopLeadersProps> = ({ topUsers }) => {
  return (
    <ul className="list-reset top-users">
      {topUsers.length > 0 && (
        <li>
          <div className="top-users__item">
            <div className="top-users__item--img">
              {topUsers[1].name.charAt(0)}
              <span>2</span>
            </div>
            <div>{topUsers[1].name}</div>
            <div>{topUsers[1].score} pt.</div>
          </div>
        </li>
      )}
      {topUsers.length > 1 && (
        <li>
          <div className="top-users__item">
            <div className="top-users__item--img">
              {topUsers[0].name.charAt(0)}
              <span>1</span>
              <img
                className="top-users__item--crown"
                src={crownIcon}
                alt="crown"
              />
            </div>
            <div>{topUsers[0].name}</div>
            <div>{topUsers[0].score} pt.</div>
          </div>
        </li>
      )}
      {topUsers.length > 2 && (
        <li>
          <div className="top-users__item">
            <div className="top-users__item--img">
              {topUsers[2].name.charAt(0)}
              <span>3</span>
            </div>
            <div>{topUsers[2].name}</div>
            <div>{topUsers[2].score} pt.</div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default TopLeaders;
