import {
  AiOutlineClose,
  AiOutlineEnvironment,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";

import { Field, Form, Formik } from "formik";

import { useModal } from "@/context/ModalContext";
import updateAddressSchema from "@/validations/updateAddressSchema";
import { useAuth } from "@/context/AuthContext";

export default function AddressModal() {
  const { user, updateAddress } = useAuth();
  const { closeModal, addressType } = useModal();

  return (
    <div className="w-[400px] p-3 my-2">
      <Formik
        initialValues={{
          title: user?.address?.title,
          details: user?.address?.details,
          contactNumber: user?.address?.contactNumber,
        }}
        validationSchema={updateAddressSchema}
        onSubmit={(value) =>
          updateAddress(
            addressType,
            value.title as string,
            value.details as string,
            value.contactNumber as string
          )
        }
        enableReinitialize={true}
      >
        {(formControl) => (
          <Form className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-4 w-11/12">
              <div className="flex justify-between items-center whitespace-nowrap">
                <h1 className="mr-auto text-xl font-bold text-gray-800">
                  Update Address
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
                <label htmlFor="title" className="select-none">
                  Title
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlineEnvironment size={20} />
                  </div>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Home"
                    type="text"
                    className="w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="details" className="select-none">
                  Address
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlineHome size={20} />
                  </div>
                  <Field
                    id="details"
                    name="details"
                    placeholder="ABC Street. XYZ Apartment. No: 5"
                    type="text"
                    className="w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contactNumber" className="select-none">
                  Contact Number
                </label>
                <div className="flex border focus-within:border-gray-400">
                  <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                    <AiOutlinePhone size={20} />
                  </div>
                  <Field
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="+123456789"
                    type="text"
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
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
