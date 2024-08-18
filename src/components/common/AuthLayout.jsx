"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import useModalStore from "@/store/useModalStore";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function AuthLayout({ children }) {
  const { isAuthenticated } = useAuthStore();

  const openLoginModal = useModalStore((state) => state.openModal);
  const clearModals = useModalStore((state) => state.clearModals);
  useEffect(() => {
    if (!isAuthenticated) {
      clearModals();
      openLoginModal(<LoginForm />);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // or a loading spinner while redirecting
  }

  return <>{children}</>;
}
