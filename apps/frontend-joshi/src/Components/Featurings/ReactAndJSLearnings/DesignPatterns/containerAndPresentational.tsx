// ContainerAndPresentational:By separating data management concerns and UI rendering, our code becomes more modular and easier to understand.

import { useState } from "react";

type todo = { id: number; text: string };
type todos = { id: number; text: string }[];

export default function ContainerAndPresentational() {
  //container component
  const [todos, setTodos] = useState<todos>([]);

  function handleAddTodo(todo: todo) {
    setTodos([...todos, todo]);
  }

  return <TodoPresentational todos={todos} onAddTodo={handleAddTodo} />;
}
interface ITodoPresentational {
  todos: todos;
  onAddTodo: (todo: todo) => void;
}
function TodoPresentational(props: ITodoPresentational) {
  const { todos, onAddTodo } = props;
  // presentational component
  return (
    <>
      <ul>
        {todos.map((todo: todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => onAddTodo({ id: Date.now(), text: "New Todo" })}>
        Add Todo
      </button>
    </>
  );
}
