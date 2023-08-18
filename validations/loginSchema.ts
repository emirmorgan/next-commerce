import { object, string } from "yup";

const loginSchema = object({
  email: string().email().required("E-Mail is required."),
  password: string().min(6).max(30).required("Password is required."),
});

export default loginSchema;
