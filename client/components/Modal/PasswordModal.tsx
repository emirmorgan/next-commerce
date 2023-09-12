import { AiOutlineClose, AiOutlineLock } from "react-icons/ai";

import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";

import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";

import changePasswordSchema from "@/validations/changePasswordSchema";

type ChangePasswordProps = {
  currentPassword: string;
  newPassword: string;
  newPasswordAgain: string;
};

export default function PasswordModal() {
  const { closeModal } = useModal();
  const { changePassword } = useAuth();

  const handleSubmit = async (values: ChangePasswordProps) => {
    if (values.newPassword === values.newPasswordAgain) {
      changePassword(values.currentPassword, values.newPassword);
    } else {
      toast.error("Passwords do not match.");
    }
  };

  return (
    <div className="w-[400px] p-3 my-2">
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          newPasswordAgain: "",
        }}
        validationSchema={changePasswordSchema}
        onSubmit={handleSubmit}
      >
        {(formControl) => (
          <Form className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-4 w-11/12">
              <div className="flex justify-between items-center whitespace-nowrap">
                <h1 className="mr-auto text-xl font-bold text-gray-800">
                  Change Password
                </h1>
                <div className="flex justify-end w-full h-full">
                  <div
                    onClick={closeModal}
                    className="border p-1 group hover:border-gray-800 hover:bg-black/5 cursor-pointer transition-all ease-linear"
                  >
                    <AiOutlineClose
                      size={18}
                      className="text-gray-900 transition-all ease-linear"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[2px] bg-green-500" />
              <div className="flex flex-col gap-1">
                <label htmlFor="currentPassword" className="select-none">
                  Password
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlineLock size={20} />
                  </div>
                  <Field
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="**************"
                    type="password"
                    className="w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newPassword" className="select-none">
                  New Password
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlineLock size={20} />
                  </div>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    placeholder="**************"
                    type="password"
                    className="w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newPasswordAgain" className="select-none">
                  New Password Again
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlineLock size={20} />
                  </div>
                  <Field
                    id="newPasswordAgain"
                    name="newPasswordAgain"
                    Again
                    placeholder="**************"
                    type="password"
                    className="w-full p-2 focus:outline-none"
                  />
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
                Change Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
