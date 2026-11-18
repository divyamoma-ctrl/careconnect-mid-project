


import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import { toast } from "sonner";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ContactFormData } from "../../types/interface/contactInterface";
import { contactSchema } from "../../services/validation/contactSchema";
import { contactInputData } from "../../services/json/contactData.json";



const subjectOptions = [
  "General Enquiry",
  "Women Support",
  "Child Welfare",
  "Volunteering",
  "Partnership",
  "Donation",
  "Other",
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      location: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
   
    try {
      console.log("Contact Form Data:", data);
       toast.success("Thank you! Your message has been submitted.");

      // Connect Appwrite.

      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
    }
   
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <Typography variant="h5" sx={{fontWeight:700}}>
        Send Us a Message
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Fill in the details below and we will be happy to hear from you.
      </Typography>

      {/* Dynamic text inputs */}
      {contactInputData.map((input) => (
        <TextField
          key={input.name}
          label={input.label}
          placeholder={input.placeholder}
          type={input.type}
          required={input.required}
          multiline={input.multiline || false}
          rows={input.multiline ? input.rows : undefined}
          {...register(input.name)}
          error={Boolean(errors[input.name])}
          helperText={errors[input.name]?.message}
        />
      ))}

      {/* Subject dropdown */}
      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Subject"
            required
            error={Boolean(errors.subject)}
            helperText={errors.subject?.message}
          >
            {subjectOptions.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={isSubmitting}
        fullWidth
        sx={{
          py: 1.5,
          mt: 1,
          fontSize: "1rem",
        }}
      >
        {isSubmitting ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Send Message"
        )}
      </Button>
    </Box>
  );
};

export default ContactForm;
