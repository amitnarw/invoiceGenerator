"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: any;
  logout: () => void;
  isLoading: boolean;
  token: any;
  showSavedInvoices: boolean;
  setShowSavedInvoices: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showSavedInvoices, setShowSavedInvoices] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("nexinvoice-token");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (token: any) => {
    localStorage.setItem("nexinvoice-token", token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("nexinvoice-token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isLoading,
        token,
        showSavedInvoices,
        setShowSavedInvoices,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
