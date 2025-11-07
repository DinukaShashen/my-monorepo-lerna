import React, { ButtonHTMLAttributes, FC } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const MyButton: FC<MyButtonProps> = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};
