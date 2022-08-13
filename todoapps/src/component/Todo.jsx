import {
  faHome,
  faPen,
  faPenAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({ text, todos, task, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== task.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="task">
        <li
          className={`task ${task.completed ? "completed" : ""}`}
          onClick={completeHandler}
        >
          {text}
        </li>
        <div className="icons">
          <FontAwesomeIcon icon={faPen} className="text-warning me-3 i" />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-danger i"
            onClick={deleteHandler}
          />
        </div>
      </div>
    </>
  );
}
