import { useState } from "react";

// 3. 이름 앞에 use를 붙여야함.
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
