const TodoInput = ({ onChange, onClick, value }) => {
  return (
    <div className="w-3/4 flex my-auto justify-evenly gap-2">
      <input
        className=" rounded-lg border border-gray-700 w-3/4 p-2 "
        placeholder="Enter Task details"
        value={value}
        onChange={onChange}
      />
      <button className="w-1/4 border border-gray-700" disabled={value === ""}
      style={{opacity: value =="" && 0.7}}
      onClick={onClick}>
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
