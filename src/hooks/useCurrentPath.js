import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/services" },
  { path: "/about" },
  { path: "/" },
  { path: "/about" },
];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

export default useCurrentPath;
