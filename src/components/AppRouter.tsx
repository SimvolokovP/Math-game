import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            index={route.exact}
          />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
