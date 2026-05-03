import { useState, type MouseEvent } from "react";
type MousePos = {
  x: number;
  y: number;
}

type BoxPos = {
  x: number;
  y: number;
}
const MouseEvents = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState<MousePos>({x: 0, y: 0});
  const [boxPos, setBoxPos] = useState<BoxPos>({x: 50, y: 50});
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({x: 0, y: 0});

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => { 
    const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if(!parentRect) return;

    setIsDragging(true);
    setDragStart({
      x: e.clientX - parentRect.left - boxPos.x,
      y: e.clientY - parentRect.top - boxPos.y
    });
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top
      });

      if (isDragging) {
        const maxX = rect.width - 100;
        const maxY = rect.height - 100;

        const newX = e.clientX - rect.x - dragStart.x;
        const newY = e.clientY - rect.y - dragStart.y;

        const newBoxPos = {
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        }

        setBoxPos(newBoxPos);
      }
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
  }

  const handleContainerLeave = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    setBoxPos({x: 50, y: 50});
  }

  
  return (
    <div style={{
      height: '400px', 
      width: '400px', 
      position: 'relative', 
      border: '1px solid #ccc', 
      overflow: 'hidden' 
    }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleContainerLeave}
    >
      <div
        style={{
          position: 'absolute',
          left: boxPos.x,
          top: boxPos.y,
          width: '100px',
          height: '100px',
          backgroundColor: isHovered ? 'lightblue' : 'gray',
          cursor: isDragging ? 'grabbing' :'grab',
          userSelect: 'none',
          transition: isDragging ? 'none' : 'all 0.3s'
        }}
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        ドラッグ可能
      </div>
        <p>マウス座標: X={mousePos.x}, Y={mousePos.y}</p>
    </div>
      
  );
}

export default MouseEvents;