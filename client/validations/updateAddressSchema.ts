import { object, string } from "yup";

const updateAddressSchema = object({
  title: string()
    .max(64, "Title too long. Try to make it shorter.")
    .required("Title is required."),
  details: string()
    .min(8, "You need to give more details about your address.")
    .max(128, "Too long address, make it shorter.")
    .required("Address is required."),
  contactNumber: string()
    .min(4, "Your phone number is not valid.")
    .max(24, "Your phone number is not valid.")
    .required("You can't leave blank the new password."),
});

export default updateAddressSchema;
