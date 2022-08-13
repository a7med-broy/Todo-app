export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (
      inputText === undefined ||
      inputText === "" ||
      inputText?.trim() === ""
    ) {
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <h2 className="text-center text-capitalize">your tasks</h2>
      <form className="add-task">
        {}
        <input
          type="text"
          value={inputText}
          name="add-task"
          onChange={inputTextHandler}
          placeholder="add new task"
        />
        <input
          type="submit"
          value="add new task"
          className="btn btn-success text-white text-capitalize"
          onClick={submitTodoHandler}
        />
      </form>
      <h2 className="text-center text-capitalize">your list</h2>
      <div class="btns">
        <button
          type="button"
          class="btn btn-primary"
          value={"all"}
          onClick={statusHandler}
        >
          All
        </button>
        <button
          type="button"
          class="btn btn-success"
          value={"completed"}
          onClick={statusHandler}
        >
          Completed
        </button>
        <button
          type="button"
          class="btn btn-warning text-white"
          value={"uncompleted"}
          onClick={statusHandler}
        >
          Incompleted
        </button>
      </div>
    </>
  );
}
