"use client";

import { useModal } from "@/context/ModalContext";
import React from "react";

export const LoginModal = () => {
  const { isSignupOpen, setSignupOpen, setLoginOpen } = useModal();

  const handleSwitchToSignup = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  if (!isSignupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {/* Add your form inputs here */}
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={handleSwitchToSignup}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
