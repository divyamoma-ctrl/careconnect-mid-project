import TextField from "@mui/material/TextField";
import type { UseFormRegisterReturn } from "react-hook-form";

interface DynamicInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: boolean;
  helperText?: string;
}

const DynamicInput = ({
  label,
  type,
  placeholder,
  register,
  error,
  helperText,
}: DynamicInputProps) => {
  return (
    <div>
      <TextField
        type={type}
        label={label}
        placeholder={placeholder}
        {...register}
        error={error}
        helperText={helperText}
        fullWidth
         size="small"
      ></TextField>
    </div>
  );
};

export default DynamicInput