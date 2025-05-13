import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";

type FormInputProps = {
  label: string;
  type?: string;
  placeholder: string;
  error?: string;
  setChange: (_value: string) => void;
};

export const FormInput = ({
  label,
  type,
  placeholder,
  error,
  setChange,
}: FormInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChange(event.target.value);
  };

  return (
    <div>
      <p>{label}</p>
      <Input placeholder={placeholder} type={type} onChange={handleOnChange} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
