const TodoCard = ({ item, handleDelete, handleStatusToggle }) => {
  return (
    <div className="w-full flex justify-between items-center p-2  border border-gray-700 text-gray-950 rounded-lg">
      <p>{item.title}</p>
      <div className="flex justify-between px-auto items-center w-1/4">
        <button
          style={{ backgroundColor: item.isCompleted ? "lightgreen" : "pink" }}
          onClick={() => handleStatusToggle(item.id)}
        >
          {item.isCompleted ? "completed" : "pending...."}
        </button>
        <img
          onClick={() => handleDelete(item.id)}
          height={20}
          width={20}
          src="/delete.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TodoCard;
