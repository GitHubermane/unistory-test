import { Navigate, Route, Routes } from 'react-router-dom';
import { WELCOME_ROUTE, routes } from 'routes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={WELCOME_ROUTE} />}
        />
      </Routes>

      {routes.map(({ path, Component, id }) => (
        <Routes key={id}>
          <Route
            path={path}
            element={<Component />}
          />
        </Routes>
      ))}
    </>
  );
};
