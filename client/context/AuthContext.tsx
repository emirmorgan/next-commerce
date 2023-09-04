"use client";

import axios from "axios";

import {
  createContext,
  useContext,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

import setCookies from "@/lib/setCookies";
import { User } from "@/lib/types";
import verifyToken from "@/lib/verifyToken";
import LoadingScreen from "@/components/Layout/LoadingScreen";

type AuthContextProvider = {
  children: React.ReactNode;
};

type IAuthContext = {
  user: User | null;
  authenticated: boolean;
  authRegister: (email: string, password: string) => void;
  authLogin: (email: string, password: string) => void;
  authLogout: () => void;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const AuthContext = createContext({} as IAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthContextProvider) {
  const route = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      const hasVerifiedToken = token && (await verifyToken(token as string));

      if (hasVerifiedToken) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        const user = await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/user")
          .then((response) => {
            return response.data;
          });

        setAuthenticated(true);
        setUser(user);
      } else {
        setAuthenticated(false);
        setUser(null);
      }

      setLoading(false);
    }

    fetchUser();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  async function authRegister(email: string, password: string) {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/auth", {
        type: "register",
        email: email,
        password: password,
      })
      .then(async (res) => {
        const token = res.data.token;

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        const user = await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/user")
          .then((response) => {
            return response.data;
          });

        setCookies({ type: "SET", tag: "token", data: token });
        setUser(user);
        setAuthenticated(true);
      })
      .catch((err) => console.log(err));
  }

  async function authLogin(email: string, password: string) {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/auth", {
        type: "login",
        email: email,
        password: password,
      })
      .then(async (res) => {
        const token = res.data.token;

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        const user = await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/user")
          .then((response) => {
            return response.data;
          });

        setCookies({ type: "SET", tag: "token", data: token });
        setUser(user);
        setAuthenticated(true);
      })
      .catch((err) => console.log(err));
  }

  function authLogout() {
    setUser(null);
    setAuthenticated(false);
    setCookies({ type: "DELETE", tag: "token", data: "" });

    route.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        setUser,
        authLogin,
        authLogout,
        authRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
