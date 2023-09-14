import { object, ref, string } from "yup";

const updatePasswordSchema = object({
  currentPassword: string()
    .min(6, "Current password must be at least 6 characters")
    .max(128)
    .required("Current password is required."),
  newPassword: string()
    .min(6, "New password must be at least 6 characters")
    .max(128)
    .required("New password is required."),
  newPasswordAgain: string()
    .min(6)
    .max(128)
    .required("You can't leave blank the new password.")
    .oneOf([ref("newPassword")], "New passwords do not match."),
});

export default updatePasswordSchema;
