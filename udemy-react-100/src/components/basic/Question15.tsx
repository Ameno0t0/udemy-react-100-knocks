type TodoItem = {
  key: string;
  text: string;
  isChecked: boolean
};

type Props = {
  items: TodoItem[];
};

const TodoList = ({items}: Props) => {
  return (
    <div>
      <h2>ToDoリスト（件）</h2>
      <input type="text" />
      <button>追加</button>

      <ul>

      </ul>
    </div>
  );
}