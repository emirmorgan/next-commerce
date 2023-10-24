"use client";

import axios from "axios";
import { toast } from "react-toastify";

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

import LoadingScreen from "@/components/Loading/LoadingScreen";

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
  updatePassword: (currentPassword: string, newPassword: string) => void;
  updateAddress: (
    type: string,
    title: string,
    details: string,
    contactNumber: string
  ) => void;
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
    fetchUser();
  }, []);

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

  if (isLoading) {
    return <LoadingScreen />;
  }

  async function authRegister(email: string, password: string) {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/auth/register", {
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
        toast.success("You have successfully registered.");
      })
      .catch((err) => {
        if (err.response.data === "already-exist") {
          toast.error("E-mail already in use.");
        }
      });
  }

  async function authLogin(email: string, password: string) {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
        email: email,
        password: password,
      })
      .then(async (res) => {
        const token = res.data;

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        const user = await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/user")
          .then((response) => {
            return response.data;
          });

        setCookies({ type: "SET", tag: "token", data: token });
        setUser(user);
        setAuthenticated(true);
        toast.success("Successfully logged in.");
        route.push("/");
      })
      .catch((err) => {
        if (err.response.data === "wrong-email-or-password") {
          toast.error("Wrong e-mail or password.");
        }
      });
  }

  function authLogout() {
    setUser(null);
    setAuthenticated(false);
    setCookies({ type: "DELETE", tag: "token", data: "" });
    axios.defaults.headers.common["Authorization"] = "";

    route.push("/");
    toast.success("Successfully logged out.");
  }

  async function updatePassword(currentPassword: string, newPassword: string) {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/user/password/update",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Password has been successfully changed.");
    } catch (error: any) {
      if (error.response.data === "wrong-password") {
        toast.error("Your current password is incorrect.");
      } else if (error.response.data === "current-password") {
        toast.error(
          "The new password cannot be the same as the current password."
        );
      } else {
        toast.error("Something went wrong.");
      }
    }
  }

  async function updateAddress(
    type: string,
    title: string,
    details: string,
    contactNumber: string
  ) {
    const updateType = {
      add: "/address/add",
      update: "/address/update",
      delete: "/address/delete",
    }[type];

    const toastMessage = {
      add: "Address successfully added.",
      update: "Address successfully changed.",
      delete: "Address successfully removed.",
    }[type];

    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      await axios.post(
        (process.env.NEXT_PUBLIC_API_URL as string) + updateType,
        { title, details, contactNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUser();
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong.");
    }
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
        updatePassword,
        updateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
