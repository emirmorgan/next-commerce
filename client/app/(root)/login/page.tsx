"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import LoadingScreen from "@/components/Loading/LoadingScreen";
import LoginForm from "@/components/Home/Login/Forms/LoginForm";
import RegisterForm from "@/components/Home/Login/Forms/RegisterForm";

export default function LoginPage() {
  const { authenticated } = useAuth();
  const router = useRouter();

  const [currentForm, setCurrentForm] = useState("login");

  if (authenticated) {
    router.push("/");

    return <LoadingScreen />;
  }

  const formType = {
    login: <LoginForm setForm={setCurrentForm} />,
    register: <RegisterForm setForm={setCurrentForm} />,
  }[currentForm];

  return (
    <div className="flex flex-col items-center max-w-[400px] mx-auto">
      <div className="flex flex-col items-center my-3 gap-1">
        <h1 className="font-bold text-2xl">Welcome!</h1>
        <p>Enjoy shopping with best prices.</p>
      </div>
      <div className="border rounded w-full py-4 mb-5">{formType}</div>
    </div>
  );
}
