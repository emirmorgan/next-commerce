import { useState, Dispatch, SetStateAction } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

import { Form, Formik, Field } from "formik";

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
  checked: String[];
};

export default function RegisterForm({ setForm }: RegisterFormProps) {
  const router = useRouter();
  const { authRegister } = useAuth();
  const [gender, setGender] = useState<string>("");

  const handleSubmit = async (values: RegisterSubmitProps) => {
    authRegister(values.email, values.password, gender);
    router.push("/");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        checked: [],
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
            </div>
            <div className="flex flex-col gap-1">
              <label>Gender (optional)</label>
              <div className="flex justify-between gap-5">
                <div
                  onClick={() => setGender("female")}
                  className={
                    "flex flex-1 justify-center items-center bg-gray-100 border h-10 cursor-pointer font-semibold text-sm" +
                    (gender === "female"
                      ? " border-black"
                      : "  hover:border-gray-300")
                  }
                >
                  <span className="select-none">Female</span>
                </div>
                <div
                  onClick={() => setGender("male")}
                  className={
                    "flex flex-1 justify-center items-center bg-gray-100 border h-10 cursor-pointer font-semibold text-sm" +
                    (gender === "male"
                      ? " border-black"
                      : "  hover:border-gray-300")
                  }
                >
                  <span className="select-none">Male</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex items-center">
                <Field
                  id="notifyMe"
                  type="checkbox"
                  name="checked"
                  value="notifyMe"
                />
                <label
                  htmlFor="notifyMe"
                  className="ml-1 text-sm font-medium text-gray-900 select-none"
                >
                  I want to receive the newsletter
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  id="terms"
                  type="checkbox"
                  name="checked"
                  value="terms"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="terms"
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
