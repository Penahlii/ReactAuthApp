import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuth: boolean;
  toggleAuth: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth((prevIsAuth) => !prevIsAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
