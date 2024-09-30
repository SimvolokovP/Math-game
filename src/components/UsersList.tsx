import { FC } from "react";
import { IUser } from "../models/IUser";

interface UsersListProps {
  usersList: IUser[];
}

const UsersList: FC<UsersListProps> = ({ usersList }) => {
  return (
    <ul className="list-reset users-list">
      {usersList.map((user, index) => (
        <li key={user.id}>
          <div>
            <div>{index + 1}</div>
            <div></div>
            <div>{user?.name}</div>
          </div>
          <div>{user?.score}</div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
