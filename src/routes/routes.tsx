import { ComponentType } from "react";
import MainPage from "../pages/MainPage";
import GamePage from "../pages/GamePage";
import LeaderboardPage from "../pages/LeaderboardPage";

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/",
  GAME = "/game",
  LEADERBOARD = "/leaderboard",
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, exact: true, component: MainPage },
  { path: RouteNames.GAME, exact: true, component: GamePage },
  { path: RouteNames.LEADERBOARD, exact: true, component: LeaderboardPage },
];
