import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const buttonStyle = {
    backgroundColor: isOn ? "green" : "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    width: "80px"
  }

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  }

  return (
    <div>
      <button onClick={toggleSwitch} style={buttonStyle}>
        {isOn ? "ON" : "OFF"}
      </button>
      <p>現在の状態：{isOn ? "アクティブ" : "非アクティブ"}</p>
    </div>
  );
}

export default ToggleSwitch;