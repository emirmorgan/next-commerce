import { object, string } from "yup";

const loginSchema = object({
  email: string().email().max(128).required("E-Mail is required."),
  password: string()
    .min(6, "Password must be at least 6 characters.")
    .max(128)
    .required("Password is required."),
});

export default loginSchema;
