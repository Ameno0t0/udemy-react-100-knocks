import React, { useState } from "react";

const TextInput = () => {
  const [textValue, setTextValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
  };
  const textCount = textValue.length;
  const clear = () => setTextValue("");
  return (
    <div>
      <input 
        type="text" 
        value={textValue}
        onChange={handleChange}
        placeholder="ここに入力してください"
      />

      <p>入力内容: {textValue}</p>
      <p>文字数：{textCount}</p>
      <button onClick={clear}>クリア</button>
    </div>
  );
};

export default TextInput;