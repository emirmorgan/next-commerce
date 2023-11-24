import { Dispatch, SetStateAction, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";

import { Form, Formik, Field, ErrorMessage } from "formik";

import loginSchema from "@/validations/loginSchema";
import { useAuth } from "@/context/AuthContext";

type LoginFormProps = {
  setForm: Dispatch<SetStateAction<string>>;
};

type LoginSubmitProps = {
  email: string;
  password: string;
};

export default function LoginForm({ setForm }: LoginFormProps) {
  const { authLogin } = useAuth();
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

  const handlePasswordVisiblity = () => {
    setPasswordHidden((curr) => !curr);
  };

  const handleSubmit = async (values: LoginSubmitProps) => {
    try {
      await authLogin(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {(formControl) => (
        <Form className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2 w-11/12">
            <h1 className="mr-auto text-xl font-bold text-gray-800">Log in</h1>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="select-none">
                E-Mail
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineMail size={20} />
                </div>
                <Field
                  id="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  type="text"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                component="span"
                className="text-red-600"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="select-none">
                Password
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineLock size={20} />
                </div>
                <Field
                  id="password"
                  name="password"
                  placeholder="**************"
                  type={isPasswordHidden ? "password" : "text"}
                  className="w-full p-2 focus:outline-none"
                />
                <div
                  onClick={handlePasswordVisiblity}
                  className="flex justify-center items-center border-r cursor-pointer p-3"
                >
                  {formControl.values.password.length !== 0 ? (
                    <>
                      {isPasswordHidden ? (
                        <AiOutlineEye size={20} />
                      ) : (
                        <AiOutlineEyeInvisible size={20} />
                      )}
                    </>
                  ) : null}
                </div>
              </div>
              <ErrorMessage
                component="span"
                className="text-red-600"
                id="password"
                name="password"
              />
            </div>
            <div className="flex items-center justify-end p-1 text-sm text-gray-700 cursor-pointer hover:underline hover:text-black">
              <span className="select-none font-semibold">
                Forgot password?
              </span>
            </div>
            <button
              type="submit"
              disabled={
                !(
                  formControl.isValid &&
                  formControl.dirty &&
                  !formControl.isSubmitting
                )
              }
              className="p-2 text-gray-600 font-semibold border-2 border-gray-300 transition-all ease-linear select-none enabled:hover:border-black enabled:hover:bg-black enabled:hover:text-white disabled:bg-gray-300 disabled:text-gray-800"
            >
              Log in
            </button>
            <div className="flex items-center justify-center p-1 gap-1 text-sm select-none">
              <span>Don&apos;t have an account?</span>
              <span
                onClick={() => setForm("register")}
                className="font-semibold text-gray-700 cursor-pointer hover:underline hover:text-black"
              >
                Register now.
              </span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
