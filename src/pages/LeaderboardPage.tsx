import { FC, useEffect, useState } from "react";
import UsersService from "../api/firebaseApi";
import { IUser } from "../models/IUser";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TopLeaders from "../components/TopLeaders";
import UsersList from "../components/UsersList";

const LeaderboaderPage: FC = () => {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await UsersService.getAllUsers();
        setUsersList(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="page leaderboard-page">
      <div className="container leaderboard-page__container">
        <div className="game-page__chapter">
          <Link to={"/"}>
            <FaArrowLeft size={32} />
          </Link>
          <div>Leaderboard</div>
        </div>
        <TopLeaders topUsers={usersList.slice(0, 3)} />
        <UsersList usersList={usersList} />
      </div>
    </div>
  );
};

export default LeaderboaderPage;
