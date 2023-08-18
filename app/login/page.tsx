"use client";

import { useState } from "react";

import LoginForm from "@/components/Login/LoginForm";
import RegisterForm from "@/components/Login/RegisterForm";

export default function LoginPage() {
  const [currentForm, setCurrentForm] = useState("register");

  const formType = {
    login: <LoginForm setForm={setCurrentForm} />,
    register: <RegisterForm setForm={setCurrentForm} />,
  }[currentForm];

  return (
    <div className="flex flex-col items-center w-[400px] mx-auto">
      <div className="flex flex-col items-center my-3 gap-1">
        <h1 className="font-bold text-2xl">Welcome!</h1>
        <p>Enjoy shopping with best prices.</p>
      </div>
      <div className="border rounded w-full py-4">{formType}</div>
    </div>
  );
}
