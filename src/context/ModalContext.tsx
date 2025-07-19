// src/context/ModalContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type ModalContextType = {
  isLoginOpen: boolean;
  setLoginOpen: (open: boolean) => void;
  isSignupOpen: boolean;
  setSignupOpen: (open: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isLoginOpen, setLoginOpen, isSignupOpen, setSignupOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
