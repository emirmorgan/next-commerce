import { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

export default function RegisterForm() {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <form className="flex flex-col justify-center items-center gap-4">
      <h1 className=" text-xl font-bold">Register</h1>
      <div className="flex flex-col gap-1 w-11/12">
        <label htmlFor="email" className="select-none">
          E-Mail
        </label>
        <div className="flex border focus-within:border-gray-400">
          <div className="flex justify-center items-center border-r bg-gray-100 p-3">
            <AiOutlineMail size={20} />
          </div>
          <input
            id="email"
            placeholder="xyz@gmail.com"
            type="text"
            className="w-full p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-11/12">
        <label htmlFor="password" className="select-none">
          Password
        </label>
        <div className="flex border focus-within:border-gray-400">
          <div className="flex justify-center items-center border-r bg-gray-100 p-3">
            <AiOutlineLock size={20} />
          </div>
          <input
            id="password"
            placeholder="**************"
            type="password"
            className="w-full p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-11/12">
        <label htmlFor="passwordConfirm" className="select-none">
          Confirm Password
        </label>
        <div className="flex border focus-within:border-gray-400">
          <div className="flex justify-center items-center border-r bg-gray-100 p-3">
            <AiOutlineLock size={20} />
          </div>
          <input
            id="passwordConfirm"
            placeholder="**************"
            type="password"
            className="w-full p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-11/12">
        <label>Gender (optional)</label>
        <div className="flex justify-between gap-5">
          <div
            onClick={() => setGender("female")}
            className={
              "flex flex-1 justify-center items-center bg-gray-100 border h-10 cursor-pointer" +
              (gender === "female"
                ? " border-black font-semibold"
                : "  hover:border-gray-300")
            }
          >
            <span className="select-none">Female</span>
          </div>
          <div
            onClick={() => setGender("male")}
            className={
              "flex flex-1 justify-center items-center bg-gray-100 border h-10 cursor-pointer" +
              (gender === "male"
                ? " border-black font-semibold"
                : "  hover:border-gray-300")
            }
          >
            <span className="select-none">Male</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-11/12">
        <div className="flex items-center mb-4">
          <input id="notifyMe" type="checkbox" value="" />
          <label
            htmlFor="notifyMe"
            className="ml-1 text-sm font-medium text-gray-900 select-none"
          >
            I want to receive the newsletter
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="terms"
            type="checkbox"
            value=""
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
      <button className="w-11/12 p-2 text-gray-600 font-semibold border-2 border-gray-300 transition-all ease-linear hover:border-black hover:text-black disabled:bg-gray-400">
        Register
      </button>
    </form>
  );
}
