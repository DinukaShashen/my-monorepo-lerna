import { ButtonHTMLAttributes, FC } from "react";
interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
export declare const MyButton: FC<MyButtonProps>;
export {};
