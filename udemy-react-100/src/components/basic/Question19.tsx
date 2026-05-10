import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { v7 as uuid } from "uuid";

type Items = {
  id: string;
  text: string;
}

type KeyPressCount = {
  Enter: number;
  Escape: number;
  Space: number;
}

const KeyboardEvents = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Items[]>([]);
  const [keyPressCount, setKeyPressCount] = useState<KeyPressCount>({
    Enter: 0,
    Escape: 0,
    Space: 0
  });

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      setItems((prev) => prev.slice(0, -1));
      return;
    }

    switch(e.key) {
      case "Enter":
        e.preventDefault();
        const text = e.currentTarget.value.trim();
        if(text === "") return;

        const newItems: Items = {
          id: uuid(),
          text: text
        }

        setItems((prev) => [...prev, newItems]);
        setInputValue("");

        setKeyPressCount((prev) => ({
          ...prev,
          Enter: prev.Enter + 1
        }));
        break;
      
      case "Escape":
        e.preventDefault();
        setInputValue("");

        setKeyPressCount((prev) => ({
          ...prev,
          Escape: prev.Escape + 1
        }));
        break;
      
      case " ":
        setKeyPressCount((prev) => ({
          ...prev,
          Space: prev.Space + 1
        }));
        break;

      default:
        return;
    }

  }
  
  return (
    <div>
      <input type="text"
        value={inputValue}
        onKeyDown={handleInputKeyDown}
        onChange={handleChangeInputValue}
        placeholder="Enterで追加、Escでクリア、Ctrl+Zで削除"
        style={{ width: '300px', padding: '8px' }}
        aria-label="アイテム入力フィールド"
        maxLength={100}
      />
      <ul>
        {items.map((item) => 
          <li key={item.id}> {item.text}</li>
        )}
      </ul>

      <div>
        <h4>キー押下回数</h4>
        <p>Enter: {keyPressCount.Enter}回</p>
        <p>Escape: {keyPressCount.Escape}回</p>
        <p>Space: {keyPressCount.Space}回</p>
      </div>
    </div>
  );
};

export default KeyboardEvents;

