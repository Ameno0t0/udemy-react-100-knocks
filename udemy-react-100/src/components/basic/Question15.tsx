import { useState, type ChangeEvent } from "react";
import { v7 as uuid } from "uuid";

type Todo = {
  id: string;
  text: string;
}

const TodoList = () => {
  const [itemText, setItemText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setItemText(e.currentTarget.value);
  const handleAddTodo = () => {
    if(itemText.trim() === "") return;

    const newTodo: Todo = {
      id: uuid(),
      text: itemText.trim(),
    };
    setTodos([...todos, newTodo]);
    setItemText("");
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>ToDoリスト（{todos.length}件）</h2>
      <input type="text" value={itemText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>追加</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text} <button onClick={() => handleDelete(todo.id)}>削除</button></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

function uuId(): string {
  throw new Error("Function not implemented.");
}
