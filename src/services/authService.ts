// src/services/authService.ts

export const authService = {
  login: async (email: string, password: string) => {
    // TODO: Replace with real API
    if (email === "john@scrid.ai" && password === "demo123") {
      return {
        id: "u123",
        name: "John D",
        email,
        domain: "factory",
        role: "engineer",
        token: "mock-jwt-token",
      };
    }
    throw new Error("Invalid credentials");
  },

  logout: () => {
    console.log("Logging out...");
    // Clear cookies, session, etc.
  },
};
