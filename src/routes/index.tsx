import React from "react";

import AppRoutes from "./app.routes";
import Auth from "../screens/Auth";
import { useAuth } from "../hooks/auth";

const routes = () => {
  const { logged } = useAuth();
  return logged ? <AppRoutes /> : <Auth />;
};

export default routes;
