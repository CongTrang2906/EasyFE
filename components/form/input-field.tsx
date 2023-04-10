import { TextField, TextFieldProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Control, useController } from "react-hook-form";

// Truyền props
export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};
//components
export function InputField({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...rest
}: InputFieldProps) {
  // lấy được giá trị onchange , onblur , ....
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  //render UI : MUI ,Ant Design....
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      {...rest}
    />
  );
}
