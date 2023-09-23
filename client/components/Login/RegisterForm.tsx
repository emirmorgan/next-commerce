import { useState, Dispatch, SetStateAction } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

import { Form, Formik, Field, ErrorMessage } from "formik";

import registerSchema from "@/validations/registerSchema";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type RegisterFormProps = {
  setForm: Dispatch<SetStateAction<string>>;
};

type RegisterSubmitProps = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function RegisterForm({ setForm }: RegisterFormProps) {
  const router = useRouter();
  const { authRegister } = useAuth();

  const handleSubmit = async (values: RegisterSubmitProps) => {
    try {
      await authRegister(values.email, values.password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        termsAndConditions: false,
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {(formControl) => (
        <Form className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2 w-11/12">
            <h1 className="mr-auto text-xl font-bold text-gray-800">
              Registration
            </h1>
            <div className="w-full h-[2px] bg-green-500" />
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
                  type="text"
                  placeholder="xyz@gmail.com"
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
                  type="password"
                  placeholder="**************"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                component="span"
                className="text-red-600"
                id="password"
                name="password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="passwordConfirm" className="select-none">
                Confirm Password
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineLock size={20} />
                </div>
                <Field
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="**************"
                  type="password"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                component="span"
                className="text-red-600"
                id="passwordConfirm"
                name="passwordConfirm"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="termsAndConditions"
                  className="ml-1 text-sm font-medium text-gray-900 select-none"
                >
                  I agree with terms and conditions
                </label>
              </div>
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
              className="p-2 text-gray-600 font-semibold border-2 border-gray-300 transition-all ease-linear select-none enabled:hover:border-green-500 enabled:hover:bg-green-500 enabled:hover:text-white disabled:bg-gray-300 disabled:text-gray-800"
            >
              Register
            </button>
            <div className="flex items-center justify-center p-1 gap-1 text-sm select-none">
              <span>Already have an account?</span>
              <span
                onClick={() => setForm("login")}
                className="font-semibold text-green-600 cursor-pointer hover:underline hover:text-green-700"
              >
                Log in now.
              </span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
