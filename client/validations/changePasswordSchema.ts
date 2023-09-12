import { object, ref, string } from "yup";

const changePasswordSchema = object({
  currentPassword: string()
    .min(6)
    .max(128)
    .required("Current password is required."),
  newPassword: string().min(6).max(128).required("New password is required."),
  newPasswordAgain: string()
    .min(6)
    .max(128)
    .required("You can't leave blank the new password.")
    .oneOf([ref("newPassword")], "New passwords do not match."),
});

export default changePasswordSchema;
