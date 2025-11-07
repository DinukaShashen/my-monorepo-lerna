import { jsx as _jsx } from "react/jsx-runtime";
export const MyButton = ({ title, ...rest }) => {
    return _jsx("button", { ...rest, children: title });
};
