import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false, // Initially, the user is not authenticated
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
