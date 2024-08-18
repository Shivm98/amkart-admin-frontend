"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi"; // Icons
import useModalStore from "@/store/useModalStore";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/api/authApi";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore((state) => state);
  const closeModal = useModalStore((state) => state.closeModal);

  const { mutate: loginUser } = useMutation({
    mutationFn: () => loginApi(),
    onSuccess: (data) => {
      login(data);
      closeModal();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    closeModal();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-white p-8 "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Welcome Back
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 pl-10 focus:border-black focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <FiLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          <motion.input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 pl-10 focus:border-black focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
        </div>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-black text-white rounded-md py-2 hover:bg-gray-800"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Sign In
      </motion.button>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-sm text-blue-600 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            // Logic for opening forgot password modal
          }}
        >
          Forgot your password?
        </a>
      </div>
      <div className="mt-2 text-center">
        <span className="text-sm text-gray-600">New here? </span>
        <a
          href="#"
          className="text-sm text-blue-600 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            // Logic for opening sign-up modal
          }}
        >
          Create an account
        </a>
      </div>
    </motion.form>
  );
}
