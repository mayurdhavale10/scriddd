 "use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isSignupOpen: boolean;
  setSignupOpen: (open: boolean) => void;
  setLoginOpen: (open: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false); // Optional: can expose later if needed

  return (
    <ModalContext.Provider value={{ isSignupOpen, setSignupOpen, setLoginOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
