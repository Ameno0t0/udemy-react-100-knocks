import { useState } from "react";

const ClickButtons = () => {
  const [lastClicked, setLastClicked] = useState("なし");
  const handleButton = (selectedButton: number) => {
    alert(`ボタン${selectedButton}がクリックされました。`);
    setLastClicked(`ボタン${selectedButton}`);
  }
  return (
    <div>
      <h3>最後にクリックしたボタン：{lastClicked}</h3>
      <button onClick={() => {handleButton(1)}}>ボタン1</button>
      <button onClick={() => {handleButton(2)}}>ボタン2</button>
      <button onClick={() => {handleButton(3)}}>ボタン3</button>
    </div>
  );
}

export default ClickButtons;