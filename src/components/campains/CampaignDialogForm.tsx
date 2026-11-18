// import { useState } from "react";

// import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

// import { Controller, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import { toast } from "sonner";

// import DynamicInput from "../common/DynamicInput";
// import type { CampaignFormDataType } from "../../types/interface/campaignDialogForm.interface";
// import { campaignSchema } from "../../services/validation/campainDialogSchema";
// import { CampaignInputData } from "../../services/json/campaignDialogForm.json";

// interface CampaignDialogFormProps {
//   onClose: () => void;
// }

// const CampaignDialogForm = ({ onClose }: CampaignDialogFormProps) => {
//   const [campaignImage, setCampaignImage] = useState<File | null>(null);

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     reset,
//   } = useForm<CampaignFormDataType>({
//     resolver: yupResolver(campaignSchema),
//     defaultValues: {
//       title: "",
//       description: "",
//       category: "",
//       targetAmount: 0,
//       raisedAmount: 0,
//       status: "active",
//     },
//   });

//   const onSubmit = (data: CampaignFormDataType) => {
//     console.log("Campaign Data:", data);
//     console.log("Campaign Image:", campaignImage);

//     toast.success("Campaign form submitted successfully!");

//     reset();
//     setCampaignImage(null);
//     onClose();
//   };

//   const handleCancel = () => {
//     reset();
//     setCampaignImage(null);
//     onClose();
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2.5,
//         pt: 1,
//       }}
//     >
//       {/* Dynamic Inputs */}
//       {CampaignInputData.map((input) =>
//         input.type === "select" ? (
//           <Controller
//             key={input.name}
//             name="category"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 select
//                 fullWidth
//                 label={input.label}
//                 placeholder={input.placeholder}
//                 error={!!errors.category}
//                 helperText={errors.category?.message}
//               >
//                 {input.options?.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             )}
//           />
//         ) : (
//           <DynamicInput
//             key={input.name}
//             label={input.label}
//             type={input.type}
//             placeholder={input.placeholder}
//             register={register(input.name, {
//               valueAsNumber: input.type === "number",
//             })}
//             error={!!errors[input.name]}
//             helperText={errors[input.name]?.message}
//           />
//         ),
//       )}

//       {/* Description */}
//       <TextField
//         label="Description"
//         placeholder="Enter campaign description"
//         multiline
//         rows={3}
//         fullWidth
//         {...register("description")}
//         error={!!errors.description}
//         helperText={errors.description?.message}
//       />

//       {/* Campaign Image */}
//       <Box>
//         <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
//           Campaign Image
//         </Typography>

//         <Button
//           variant="outlined"
//           component="label"
//           sx={{ textTransform: "none" }}
//         >
//           Upload Image
//           <input
//             type="file"
//             hidden
//             accept="image/*"
//             onChange={(event) =>
//               setCampaignImage(event.target.files?.[0] || null)
//             }
//           />
//         </Button>

//         {campaignImage && (
//           <Box sx={{ mt: 1 }}>
//             <Typography variant="caption">{campaignImage.name}</Typography>
//           </Box>
//         )}
//       </Box>

//       {/* Status */}
//       <Controller
//         name="status"
//         control={control}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             select
//             label="Campaign Status"
//             fullWidth
//             error={!!errors.status}
//             helperText={errors.status?.message}
//           >
//             <MenuItem value="active">Active</MenuItem>
//             <MenuItem value="completed">Completed</MenuItem>
//           </TextField>
//         )}
//       />

//       {/* Buttons */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 1 }}>
//         <Button variant="outlined" color="inherit" onClick={handleCancel}>
//           Cancel
//         </Button>

//         <Button
//           type="submit"
//           variant="contained"
//           sx={{ textTransform: "none" }}
//         >
//           Add Campaign
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CampaignDialogForm;




import { useEffect, useState } from "react";

import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import DynamicInput from "../common/DynamicInput";

import type { CampaignFormDataType } from "../../types/interface/campaignDialogForm.interface";

import { campaignSchema } from "../../services/validation/campainDialogSchema";
import { CampaignInputData } from "../../services/json/campaignDialogForm.json";

interface CampaignDialogFormProps {
  onClose: () => void;
  onSave: (data: CampaignFormDataType, image: File | null) => void;
  initialData?: CampaignFormDataType;
}

const defaultValues: CampaignFormDataType = {
  title: "",
  description: "",
  category: "",
  targetAmount: 0,
  raisedAmount: 0,
  status: "active",
};

const CampaignDialogForm = ({
  onClose,
  onSave,
  initialData,
}: CampaignDialogFormProps) => {
  const [campaignImage, setCampaignImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CampaignFormDataType>({
    resolver: yupResolver(campaignSchema),
    defaultValues,
  });

  // Fill the form when editing, or clear it when adding
  useEffect(() => {
    reset(initialData || defaultValues);
    setCampaignImage(null);
  }, [initialData, reset]);

  const onSubmit = (data: CampaignFormDataType) => {
    onSave(data, campaignImage);
  };

  const handleCancel = () => {
    reset(defaultValues);
    setCampaignImage(null);
    onClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        pt: 1,
      }}
    >
      {/* Dynamic Inputs */}
      {CampaignInputData.map((input) =>
        input.type === "select" ? (
          <Controller
            key={input.name}
            name="category"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                label={input.label}
                placeholder={input.placeholder}
                error={!!errors.category}
                helperText={errors.category?.message}
              >
                {input.options?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        ) : (
          <DynamicInput
            key={input.name}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            register={register(input.name, {
              valueAsNumber: input.type === "number",
            })}
            error={!!errors[input.name]}
            helperText={errors[input.name]?.message}
          />
        ),
      )}

      {/* Description */}
      <TextField
        label="Description"
        placeholder="Enter campaign description"
        multiline
        rows={3}
        fullWidth
        {...register("description")}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      {/* Campaign Image */}
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Campaign Image
        </Typography>

        <Button
          variant="outlined"
          component="label"
          sx={{ textTransform: "none" }}
        >
          Upload Image

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(event) =>
              setCampaignImage(event.target.files?.[0] || null)
            }
          />
        </Button>

        {campaignImage && (
          <Typography variant="caption" sx={{ mt: 1 ,  display:"block"}}>
            {campaignImage.name}
          </Typography>
        )}
      </Box>

      {/* Status */}
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Campaign Status"
            fullWidth
            error={!!errors.status}
            helperText={errors.status?.message}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
        )}
      />

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 1,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          {initialData ? "Update Campaign" : "Add Campaign"}
        </Button>
      </Box>
    </Box>
  );
};

export default CampaignDialogForm;