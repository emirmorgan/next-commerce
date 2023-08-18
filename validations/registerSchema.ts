import { object, string, ref } from "yup";

const registerSchema = object({
  email: string().email().required("E-Mail is required."),
  password: string().min(6).max(30).required("Password is required."),
  passwordConfirm: string()
    .required("Password confirm is required.")
    .oneOf([ref("password")], "Your passwords do not match."),
});

export default registerSchema;
