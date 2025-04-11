import { FieldError } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type InputFieldProps = {
  label: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-normal">{label}</Label>
      <Input
        type={type}
        {...register(name)}
        {...inputProps}
        defaultValue={defaultValue}
        className="w-full"
      />
      {error?.message && (
        <p className="text-xs text-destructive">{error.message.toString()}</p>
      )}
    </div>
  );
};
