import {
  AiOutlineClose,
  AiOutlineEnvironment,
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";

import { Field, Form, Formik } from "formik";

import updateAddressSchema from "@/validations/updateAddressSchema";
import { UserAddress } from "@/lib/types";

import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";

export default function AddressModal() {
  const { user, updateAddress } = useAuth();
  const { closeModal, addressType } = useModal();

  const handleSubmit = (values: UserAddress) => {
    const addressData = {
      fullName: values.fullName,
      contactNumber: values.contactNumber,
      country: values.country,
      city: values.city,
      addressLine: values.addressLine,
      addressLineSecond: values.addressLineSecond,
    };

    updateAddress(addressType, addressData);
  };

  return (
    <Formik
      initialValues={{
        fullName: user?.address?.fullName as string,
        contactNumber: user?.address?.contactNumber as string,
        country: user?.address?.country as string,
        city: user?.address?.city as string,
        addressLine: user?.address?.addressLine as string,
        addressLineSecond: user?.address?.addressLineSecond as string,
      }}
      validationSchema={updateAddressSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(formControl) => (
        <Form className="flex flex-col justify-center items-center sm:w-[400px] px-3 py-6 gap-4">
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
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="select-none">
                Full Name
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineUser size={20} />
                </div>
                <Field
                  id="fullName"
                  name="fullName"
                  placeholder="First name and last name"
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
            <div className="flex flex-col gap-1">
              <label htmlFor="country" className="select-none">
                Country
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineGlobal size={20} />
                </div>
                <Field
                  id="country"
                  name="country"
                  placeholder="First name and last name"
                  type="text"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="select-none">
                City
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineEnvironment size={20} />
                </div>
                <Field
                  id="city"
                  name="city"
                  placeholder="First name and last name"
                  type="text"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="addressLine" className="select-none">
                Address Line 1
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineHome size={20} />
                </div>
                <Field
                  id="addressLine"
                  name="addressLine"
                  placeholder="ABC Street. XYZ Apartment. No: 5"
                  type="text"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="addressLineSecond" className="select-none">
                Address Line 2
              </label>
              <div className="flex border focus-within:border-gray-400">
                <div className="flex justify-center items-center border-r bg-gray-100 p-3">
                  <AiOutlineHome size={20} />
                </div>
                <Field
                  id="addressLineSecond"
                  name="addressLineSecond"
                  placeholder="ABC Street. XYZ Apartment. No: 5"
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
              className="p-2 text-gray-600 font-semibold border-2 border-gray-300 transition-all ease-linear select-none enabled:hover:border-black enabled:hover:bg-black enabled:hover:text-white disabled:bg-gray-300 disabled:text-gray-800"
            >
              Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
