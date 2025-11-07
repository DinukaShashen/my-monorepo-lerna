import React, { InputHTMLAttributes, FC } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const MyInput: FC<MyInputProps> = (props) => {
  return <input {...props} />;
};
