import React from "react";

import { AuthProvider } from "./auth";
import { FavProvider } from "./favorites";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <FavProvider>
      <AuthProvider>{children}</AuthProvider>
    </FavProvider>
  </AuthProvider>
);

export default AppProvider;
