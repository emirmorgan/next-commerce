import { object, string } from "yup";

const updateAddressSchema = object({
  fullName: string()
    .max(256, "Full name is too long. Try to make it shorter.")
    .required("Full name is required."),
  country: string()
    .max(64, "Country is too long. Try to make it shorter.")
    .required("Country is required."),
  city: string()
    .max(64, "City is too long. Try to make it shorter.")
    .required("City is required."),
  addressLine: string()
    .min(8, "You need to give more details about your address.")
    .max(128, "Too long address, make it shorter.")
    .required("Address line is required."),
  contactNumber: string()
    .min(4, "Your phone number is not valid.")
    .max(24, "Your phone number is not valid.")
    .required("You can't leave blank the new password."),
});

export default updateAddressSchema;
