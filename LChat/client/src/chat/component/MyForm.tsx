import React, { useState } from "react";
import { socket } from "@/utils/socket";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(2000).emit("create-something", value, () => {
      setIsLoading(false);
    });

    socket.on("create-something", (msg) => {
      console.log(msg);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
