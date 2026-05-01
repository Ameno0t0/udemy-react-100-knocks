import { useState, type Context, type MouseEvent } from "react";

const EventInfo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});
  const [bgColor, setBgColor] = useState('White');
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setMessage("");
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
    setCounter(counter + 1);
    e.shiftKey? setBgColor('lightsteelblue') : setBgColor('White');

  };

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMessage("右クリックは使用できません")
  };

  const handleCountClear = (e: MouseEvent<HTMLDivElement>) => {
    setCounter(0);
  }
  return (
    <div
      style={{
        height: '300px',
        backgroundColor: bgColor,
        position: 'relative',
        border: '1px solid #ccc'
      }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleCountClear}
    >
      <p>クリック位置: X={position.x}, Y={position.y}</p>
      <p>カウンター: {counter}</p>
      <p>Shiftキーを押しながらクリックで色が変わります</p>
      <p>{message}</p>

    </div>
  );
}

export default EventInfo;