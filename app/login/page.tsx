"use client";

import { useState } from "react";

import LoginForm from "@/components/Login/LoginForm";
import RegisterForm from "@/components/Login/RegisterForm";

export default function LoginPage() {
  const [currentForm, setCurrentForm] = useState("register");

  return (
    <div className="flex flex-col items-center w-[400px] mx-auto my-4">
      <div className="border rounded w-full py-4">
        {currentForm === "register" ? (
          <RegisterForm setForm={setCurrentForm} />
        ) : (
          <LoginForm setForm={setCurrentForm} />
        )}
      </div>
    </div>
  );
}
