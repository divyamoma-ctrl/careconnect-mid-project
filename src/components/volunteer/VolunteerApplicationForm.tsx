



// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";

// import {
//   Box,
//   Button,
//   Card,
//   CircularProgress,
//   MenuItem,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { toast } from "sonner";

// import type { VolunteerApplicationFormData } from "../../types/interface/volunteerApplication.interface";

// import { volunteerApplicationSchema } from "../../services/validation/volunteerApplication.schema";

// import {
//   VolunteerApplicationInputData,
//   availabilityOptions,
// } from "../../services/json/volunteerApplicationForm.json";

// import DynamicInput from "../common/DynamicInput";

// const VolunteerApplicationForm = () => {
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<VolunteerApplicationFormData>({
//     resolver: yupResolver(volunteerApplicationSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       skills: "",
//       availability: "",
//       message: "",
//     },
//   });

//   const handleApplication = async (
//     data: VolunteerApplicationFormData
//   ) => {
//     console.log("Volunteer Application:", data);

//     toast.success("Application submitted successfully!");

//     reset();
//   };

//   const fieldStyles = {
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "10px",
//       backgroundColor: "#ffffff",
//     },
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#E2E8F0",
//     },
//     "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#D4A017",
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#D4A017",
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#92400E",
//     },
//   };

//   return (
//     <Card
//       elevation={0}
//       sx={{
//         width: "100%",
//         maxWidth: "460px",
//         mx: "auto",
//         borderRadius: "18px",
//         overflow: "hidden",
//         border: "1px solid #EAEAEA",
//         boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
//         backgroundColor: "#ffffff",
//       }}
//     >
//       {/* Form Header */}

//       <Box
//         sx={{
//           backgroundColor: "#FFFBEB",
//           px: { xs: 2, sm: 3 },
//           py: 2.5,
//           borderBottom: "1px solid #FDE68A",
//         }}
//       >
//         <Typography
//           variant="overline"
//           sx={{
//             color: "#92400E",
//             fontWeight: 700,
//             letterSpacing: 1.2,
//           }}
//         >
//           VOLUNTEER APPLICATION
//         </Typography>

//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             color: "#1E293B",
//             mt: 0.3,
//           }}
//         >
//           Join Our Team
//         </Typography>

//         <Typography
//           variant="body2"
//           sx={{
//             color: "#64748B",
//             mt: 0.8,
//             lineHeight: 1.7,
//           }}
//         >
//           Fill in your details and take the first step towards making a difference.
//         </Typography>
//       </Box>

//       {/* Form Fields */}

//       <Box
//         component="form"
//         onSubmit={handleSubmit(handleApplication)}
//         sx={{
//           p: { xs: 2, sm: 3 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 2.2,
//         }}
//       >
//         {/* Personal Information */}

//         <Typography
//           variant="subtitle2"
//           sx={{
//             fontWeight: 700,
//             color: "#334155",
//           }}
//         >
//           Personal Information
//         </Typography>

//         {VolunteerApplicationInputData.map((input) => (
//           <DynamicInput
//             key={input.name}
//             label={input.label}
//             type={input.type}
//             placeholder={input.placeholder}
//             error={!!errors[input.name]}
//             helperText={errors[input.name]?.message}
//             register={register(input.name)}
//           />
//         ))}

//         {/* Skills / Experience */}

//         <TextField
//           label="Relevant Skills / Experience (Optional)"
//           placeholder="Mention your skills, qualifications or previous experience..."
//           multiline
//           rows={3}
//           fullWidth
//           size="small"
//           sx={fieldStyles}
//           {...register("skills")}
//           error={!!errors.skills}
//           helperText={errors.skills?.message}
//         />

//         {/* Availability */}

//         <TextField
//           select
//           label="Your Availability"
//           fullWidth
//           size="small"
//           sx={fieldStyles}
//           {...register("availability")}
//           error={!!errors.availability}
//           helperText={errors.availability?.message}
//         >
//           {availabilityOptions.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>

//         {/* Motivation Message */}

//         <TextField
//           label="Why do you want to volunteer?"
//           placeholder="Tell us what motivates you to join..."
//           multiline
//           rows={4}
//           fullWidth
//           size="small"
//           sx={fieldStyles}
//           {...register("message")}
//           error={!!errors.message}
//           helperText={errors.message?.message}
//         />

//         {/* Submit Button */}

//         <Button
//           variant="contained"
//           type="submit"
//           fullWidth
//           disabled={isSubmitting}
//           sx={{
//             mt: 0.5,
//             py: 1.3,
//             borderRadius: "10px",
//             backgroundColor: "#FACC15",
//             color: "#422006",
//             fontWeight: 700,
//             fontSize: "15px",
//             textTransform: "none",
//             boxShadow: "none",
//             "&:hover": {
//               backgroundColor: "#EAB308",
//               boxShadow: "none",
//             },
//             "&:disabled": {
//               backgroundColor: "#FDE68A",
//               color: "#78350F",
//             },
//           }}
//         >
//           {isSubmitting ? (
//             <CircularProgress size={23} color="inherit" />
//           ) : (
//             "Submit Application"
//           )}
//         </Button>

//         <Typography
//           variant="caption"
//           sx={{
//             textAlign: "center",
//             color: "#94A3B8",
//           }}
//         >
//           Thank you for being willing to make a difference.
//         </Typography>
//       </Box>
//     </Card>
//   );
// };

// export default VolunteerApplicationForm;



// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CircularProgress,
//   MenuItem,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { HandHeart } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "sonner";

// import type { VolunteerApplicationFormData } from "../../types/interface/volunteerApplication.interface";

// import { volunteerApplicationSchema } from "../../services/validation/volunteerApplication.schema";

// import { VolunteerApplicationInputData } from "../../services/json/volunteerApplicationForm.json";

// // Keep your existing DynamicInput import path
// import DynamicInput from "../common/DynamicInput";

// const VolunteerApplicationForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<VolunteerApplicationFormData>({
//     resolver: yupResolver(volunteerApplicationSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       skills: "",
//       availability: "",
//       message: "",
//     },
//   });

//   // Input styling
//   const fieldStyles = {
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "9px",
//       backgroundColor: "#F9FAFB",

//       "& fieldset": {
//         borderColor: "#E5E7EB",
//       },

//       "&:hover fieldset": {
//         borderColor: "#D97706",
//       },

//       "&.Mui-focused": {
//         backgroundColor: "#FFFFFF",
//       },

//       "&.Mui-focused fieldset": {
//         borderColor: "#D97706",
//       },
//     },

//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#92400E",
//     },
//   };

//   // Handle form submission
//   const handleApplication = async (
//     data: VolunteerApplicationFormData
//   ) => {
//     try {
//       setIsSubmitting(true);

//       console.log("Volunteer Application:", data);

//       toast.success("Application submitted successfully!");

//       reset();
//     } catch (error) {
//       console.error("Application error:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         borderRadius: 3,
//          maxWidth: 520,
//          mx: "auto",
//         overflow: "hidden",
//         border: "1px solid #FDE68A",
//         backgroundColor: "#FFFFFF",
//         boxShadow: "0 8px 25px rgba(120, 53, 15, 0.06)",
//       }}
//     >
//       {/* Form Header */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #292524, #44403C)",
//           color: "#FFFFFF",
//          px: { xs: 2, sm: 2.5 },
// py: 2,
//         }}
//       >

//         <Typography
//           variant="overline"
//           sx={{
//             color: "#FACC15",
//             fontWeight: 700,
//             letterSpacing: 1.5,
//           }}
//         >
//           VOLUNTEER APPLICATION
//         </Typography>

//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 800,
//             mt: 0.5,
//             color: "#FFFFFF",
//           }}
//         >
//           Join Our Team
//         </Typography>

//         <Typography
//           sx={{
//             mt: 1,
//             color: "#D6D3D1",
//             fontSize: 14,
//             lineHeight: 1.7,
//           }}
//         >
//           Your time and kindness can make a meaningful difference.
//           Fill in your details to get started.
//         </Typography>
//       </Box>

//       {/* Form Body */}
//       <Box
//         component="form"
//         onSubmit={handleSubmit(handleApplication)}
//         sx={{
//           p: { xs: 2.5, sm: 3 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 2.5,
//         }}
//       >
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 700,
//             color: "#292524",
//             mb: 0.2,
//           }}
//         >
//           Personal Information
//         </Typography>

//         {/* Name, Email and Phone */}
//         {VolunteerApplicationInputData.map((field) => (
//           <DynamicInput
//             key={field.name}
//             label={field.label}
//             type={field.type}
//             placeholder={field.placeholder}
//             error={!!errors[field.name]}
//             helperText={errors[field.name]?.message}
//            register={register(field.name)}
//           />
//         ))}

//         {/* Skills */}
//         <TextField
//           fullWidth
//           label="Skills"
//           placeholder="e.g. Teaching, Communication, First Aid"
//           multiline
//           rows={2}
//           {...register("skills")}
//           error={!!errors.skills}
//           helperText={errors.skills?.message}
//           sx={fieldStyles}
//         />

//         {/* Availability */}
//         <TextField
//           fullWidth
//           select
//           label="Availability"
//           defaultValue=""
//           {...register("availability")}
//           error={!!errors.availability}
//           helperText={errors.availability?.message}
//           sx={fieldStyles}
//         >
//           <MenuItem value="" disabled>
//             Select your availability
//           </MenuItem>

//           <MenuItem value="Weekdays">Weekdays</MenuItem>
//           <MenuItem value="Weekends">Weekends</MenuItem>
//           <MenuItem value="Both">Both</MenuItem>
//           <MenuItem value="Flexible">Flexible</MenuItem>
//         </TextField>

//         {/* Message */}
//         <TextField
//           fullWidth
//           label="Why do you want to volunteer?"
//           placeholder="Tell us a little about your motivation..."
//           multiline
//           rows={3}
//           {...register("message")}
//           error={!!errors.message}
//           helperText={errors.message?.message}
//           sx={fieldStyles}
//         />

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           fullWidth
//           disabled={isSubmitting}
//           startIcon={
//             isSubmitting ? (
//               <CircularProgress size={18} color="inherit" />
//             ) : (
//               <HandHeart size={19} />
//             )
//           }
//           sx={{
//             py: 1.5,
//             borderRadius: 2,
//             fontWeight: 700,
//             fontSize: 15,
//             textTransform: "none",
//             color: "#292524",
//             background: "linear-gradient(90deg, #FACC15, #FDE047)",
//             boxShadow: "0 3px 8px rgba(217, 119, 6, 0.15)",

//             "&:hover": {
//               background: "linear-gradient(90deg, #EAB308, #FACC15)",
//             },

//             "&.Mui-disabled": {
//               backgroundColor: "#FDE68A",
//               color: "#78716C",
//             },
//           }}
//         >
//           {isSubmitting ? "Submitting..." : "Submit Application"}
//         </Button>

//         <Typography
//           variant="caption"
//           sx={{
//             textAlign: "center",
//             color: "#78716C",
//             lineHeight: 1.6,
//           }}
//         >
//           Thank you for choosing to make a difference with CareConnect.
//         </Typography>
//       </Box>
//     </Card>
//   );
// };

// export default VolunteerApplicationForm;






import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { HandHeart } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

import type { VolunteerApplicationFormData } from "../../types/interface/volunteerApplication.interface";

import { volunteerApplicationSchema } from "../../services/validation/volunteerApplication.schema";

import { VolunteerApplicationInputData } from "../../services/json/volunteerApplicationForm.json";

import DynamicInput from "../common/DynamicInput";

const VolunteerApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerApplicationFormData>({
    resolver: yupResolver(volunteerApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      skills: "",
      availability: "",
      message: "",
    },
  });

  // Common input styling
  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#F9FAFB",
      fontSize: "13px",

      "& input": {
        padding: "9px 12px",
      },

      "& textarea": {
        padding: "0 !important",
      },

      "& fieldset": {
        borderColor: "#E5E7EB",
      },

      "&:hover fieldset": {
        borderColor: "#D97706",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#D97706",
      },
    },

    "& .MuiInputLabel-root": {
      fontSize: "13px",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#92400E",
    },

    "& .MuiFormHelperText-root": {
      fontSize: "11px",
      marginLeft: "2px",
    },
  };

  // Handle form submission
  const handleApplication = async (
    data: VolunteerApplicationFormData
  ) => {
    try {
      setIsSubmitting(true);

      console.log("Volunteer Application:", data);

      toast.success("Application submitted successfully!");

      reset();
    } catch (error) {
      console.error("Application error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 440,
        mx: "auto",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid #FDE68A",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 8px 28px rgba(41, 37, 36, 0.12)",
      }}
    >
      {/* Form Header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #292524, #44403C)",
          color: "#FFFFFF",
          px: 2.5,
          py: 2,
        }}
      >
        {/* <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            backgroundColor: "#FACC15",
            color: "#292524",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <HandHeart size={21} />
        </Box> */}

        <Typography
          variant="overline"
          sx={{
            color: "#FACC15",
            fontWeight: 700,
            letterSpacing: 1.3,
            fontSize: 10,
          }}
        >
          VOLUNTEER APPLICATION
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mt: 0.2,
            color: "#FFFFFF",
          }}
        >
          Join Our Team
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            color: "#D6D3D1",
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          Your time and kindness can make a meaningful difference.
          Fill in your details to get started.
        </Typography>
      </Box>

      {/* Form Body */}
      <Box
        component="form"
        onSubmit={handleSubmit(handleApplication)}
        sx={{
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.6,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            color: "#292524",
          }}
        >
          Personal Information
        </Typography>

        {/* Name, Email and Phone */}
        {VolunteerApplicationInputData.map((field) => (
          <DynamicInput
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            register={register(field.name)}
          />
        ))}

        {/* Skills */}
        <TextField
          fullWidth
          size="small"
          label="Skills"
          placeholder="e.g. Teaching, Communication, First Aid"
          multiline
          rows={1}
          {...register("skills")}
          error={!!errors.skills}
          helperText={errors.skills?.message}
          sx={fieldStyles}
        />

        {/* Availability */}
        <TextField
          fullWidth
          size="small"
          select
          label="Availability"
          {...register("availability")}
          error={!!errors.availability}
          helperText={errors.availability?.message}
          sx={fieldStyles}
        >
          <MenuItem value="" disabled>
            Select your availability
          </MenuItem>

          <MenuItem value="Weekdays">Weekdays</MenuItem>
          <MenuItem value="Weekends">Weekends</MenuItem>
          <MenuItem value="Both">Both</MenuItem>
          <MenuItem value="Flexible">Flexible</MenuItem>
        </TextField>

        {/* Message */}
        <TextField
          fullWidth
          size="small"
          label="Why do you want to volunteer?"
          placeholder="Tell us about your motivation..."
          multiline
          rows={2}
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={fieldStyles}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          startIcon={
            isSubmitting ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <HandHeart size={17} />
            )
          }
          sx={{
            py: 1.1,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: 13,
            textTransform: "none",
            color: "#292524",
            background: "linear-gradient(90deg, #FACC15, #FDE047)",
            boxShadow: "0 3px 8px rgba(217, 119, 6, 0.15)",

            "&:hover": {
              background: "linear-gradient(90deg, #EAB308, #FACC15)",
            },

            "&.Mui-disabled": {
              backgroundColor: "#FDE68A",
              color: "#78716C",
            },
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>

        <Typography
          sx={{
            textAlign: "center",
            color: "#78716C",
            fontSize: 10,
            lineHeight: 1.5,
          }}
        >
          Thank you for choosing to make a difference with CareConnect.
        </Typography>
      </Box>
    </Card>
  );
};

export default VolunteerApplicationForm;
