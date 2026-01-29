import { useState, useEffect } from "react";

function Chat() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
export default Chat;