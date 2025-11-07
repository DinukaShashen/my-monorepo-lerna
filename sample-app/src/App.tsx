import { useState } from "react";
import { MyButton, MyInput } from "@myrepo/shared-ui";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <Toaster />
      <MyInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something.."
      />
      <MyButton
        title="Show Toast"
        onClick={() => toast.success(`You typed: ${value}`)}
      />
    </div>
  );
}
