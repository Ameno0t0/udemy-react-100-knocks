import { useState } from "react";

const ClickButtons = () => {
  const [lastClicked, setLastClicked] = useState("なし");
  const handleButton1 = () => {
    alert("ボタン1がクリックされました。");
    setLastClicked("ボタン1");
  }
  const handleButton2 = () => {
    alert("ボタン2がクリックされました。");
    setLastClicked("ボタン2");
  }
  const handleButton3 = () => {
    alert("ボタン3がクリックされました。");
    setLastClicked("ボタン3");
  }
  return (
    <div>
      <h3>最後にクリックしたボタン：{lastClicked}</h3>
      <button onClick={handleButton1}>ボタン1</button>
      <button onClick={handleButton2}>ボタン2</button>
      <button onClick={handleButton3}>ボタン3</button>
    </div>
  );
}

export default ClickButtons;