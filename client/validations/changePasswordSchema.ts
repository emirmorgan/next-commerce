import { object, string } from "yup";

const changePasswordSchema = object({
  password: string().min(6).max(128).required("Current password is required."),
  newPassword: string().min(6).max(128).required("New password is required."),
  newPasswordAgain: string()
    .min(6)
    .max(128)
    .required("Re-type the new password."),
});

export default changePasswordSchema;
