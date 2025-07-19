'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  login as mockLogin,
  signup as mockSignup,
  getCurrentUser,
  logout as mockLogout,
  User,
} from '@/services/authService';

type AuthContextType = {
  user: User | null;
  login: (email: string) => Promise<boolean>;
  signup: (email: string, role: User['role'], factoryId?: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load current user on initial render
  useEffect(() => {
    const current = getCurrentUser();
    if (current) {
      setUser(current);
    }
  }, []);

  // ✅ LOGIN
  const login = async (email: string): Promise<boolean> => {
    const result = await mockLogin(email);
    if (result) {
      setUser(result);
      return true;
    }
    return false;
  };

  // ✅ SIGNUP
  const signup = async (
    email: string,
    role: User['role'],
    factoryId?: string
  ): Promise<boolean> => {
    const result = await mockSignup(email, role, factoryId);
    if (result) {
      setUser(result);
      return true;
    }
    return false;
  };

  // ✅ LOGOUT
  const logout = () => {
    mockLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
