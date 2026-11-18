// // FormData: Suppose a registered user wants to apply for the Teaching Volunteer role.

// // Your form contains four fields:


// export interface VolunteerApplicationFormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// //  VolunteerApplicationPayload – Complete application data
// // Now imagine the user clicks the Apply button.

// // Your application already knows:
// // - Which volunteer role the user selected.
// // - The ID of that volunteer role.
// // - Which registered user is currently logged in.
// // So you combine the form data with these additional details.
// export interface VolunteerApplicationPayload {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   roleId: number;
//   roleTitle: string;
//   userId: string;
// }

// export interface VolunteerApplicationInputType {
//   name: "name" | "email" | "phone";
//   label: string;
//   type: string;
//   placeholder: string;
// }



export interface VolunteerApplicationFormData {
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message: string;
}

export interface VolunteerApplicationPayload {
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message: string;
  roleId: number;
  roleTitle: string;
  userId: string;
}

export interface VolunteerApplicationInputType {
  name: "name" | "email" | "phone";
  label: string;
  type: string;
  placeholder: string;
}


// export interface VolunteerApplication {
//   $id: string;
//   name: string;
//   email: string;
//   phone: string;
//   skills: string;
//   availability: string;
//   message: string;
//   roleId: number;
//   roleTitle: string;
//   userId: string;
//   status: "Pending" | "Approved" | "Rejected";
//   createdAt: string;
// }