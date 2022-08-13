import Todo from "./Todo";
export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <>
      <div className="tasks">
        <ul className="task-list">
          {filteredTodos.map((task) => (
            <Todo
              setTodos={setTodos}
              key={task.id}
              task={task}
              text={task.text}
              todos={todos}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
