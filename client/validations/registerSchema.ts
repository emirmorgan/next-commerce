import { object, string, ref, bool } from "yup";

const registerSchema = object({
  email: string().email().max(128).required("E-Mail is required."),
  password: string()
    .min(6, "Password must be at least 6 characters.")
    .max(128)
    .required("Password is required."),
  passwordConfirm: string()
    .required("Password confirm is required.")
    .oneOf([ref("password")], "Your passwords do not match."),
  termsAndConditions: bool().oneOf([true]),
});

export default registerSchema;
