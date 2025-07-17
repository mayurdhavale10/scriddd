"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Example user object structure
interface User {
  id: string;
  name: string;
  email: string;
  domain: "factory" | "hospital"; // Add more domains later
  role: "admin" | "engineer" | "viewer"; // Customize roles
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // TEMP: mock login
  useEffect(() => {
    const mockUser: User = {
      id: "u123",
      name: "John D",
      email: "john@scrid.ai",
      domain: "factory",
      role: "engineer",
    };
    setUser(mockUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
