"use client";

import React, { useState } from "react";

export const OtpModal = () => {
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Example async verification logic
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        body: JSON.stringify({ otp }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: unknown = await response.json();

      // Basic success simulation
      if ((data as { success: boolean }).success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Verifying..." : "Submit"}
          </button>
        </form>

        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm">
            We can&apos;t verify your code. Please try again.
          </p>
        )}

        {status === "success" && (
          <p className="mt-4 text-green-600 text-sm">OTP Verified Successfully ✅</p>
        )}
      </div>
    </div>
  );
};
