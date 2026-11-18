// import * as Yup from "yup";

// export const volunteerApplicationSchema = Yup.object({
//   name: Yup.string()
//     .required("Full name is required")
//     .min(3, "Name must be at least 3 characters"),

//   email: Yup.string()
//     .email("Enter a valid email address")
//     .required("Email is required"),

//   phone: Yup.string()
//     .required("Phone number is required")
//     .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

//   skills: Yup.string()
//     .max(300, "Skills cannot exceed 300 characters")
//     .optional(),

//   availability: Yup.string()
//     .required("Please select your availability")
//     .oneOf(
//       ["Weekdays", "Weekends", "Both", "Flexible"],
//       "Please select a valid availability option"
//     ),

//   message: Yup.string()
//     .required("Please tell us why you want to volunteer")
//     .min(10, "Message must be at least 10 characters")
//     .max(500, "Message cannot exceed 500 characters"),
// });




import * as Yup from "yup";

export const volunteerApplicationSchema = Yup.object({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

  skills: Yup.string()
    .max(300, "Skills cannot exceed 300 characters")
    .defined(),

  availability: Yup.string()
    .required("Please select your availability")
    .oneOf(
      ["Weekdays", "Weekends", "Both", "Flexible"],
      "Please select a valid availability option"
    ),

  message: Yup.string()
    .required("Please tell us why you want to volunteer")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});
