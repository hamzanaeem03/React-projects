import { useState } from "react";
import TodoArray from "./TodoArray";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";
import FilterButtons from "./FilterButtons";

const TodoPage = () => {
  const [filter, setFilter] = useState("All");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete React project",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Grocery shopping",
      isCompleted: true,
    },
  ]);
  const handleOnClick = () => {
    setTodos([...todos, { id: Date.now(), title: todo, status: "pending" }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    const filteredId = todos.filter((data) => data.id !== id);
    setTodos([...filteredId]);
  };

  const handleStatusToggle = (id) => {
    const targetedTodo = todos.find((data) => data.id == id);
    targetedTodo.isCompleted = !targetedTodo.isCompleted;
    setTodos([...todos]);
  };

  const filteredTodos = todos.filter((data)=>{
    if (filter === 'All') {
      return true
    }
    if (filter === 'Completed' && data.isCompleted) {
      return true
    }
    if (filter === 'Pending'  && !data.isCompleted) {
      return true
    }
  })
  return (
    <div className="w-screen h-screen flex">
      <div className=" w-3/4 my-auto flex gap-6 p-4 flex-col justify-center items-center mx-auto">
        <TodoInput
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={handleOnClick}
        />
       <FilterButtons filter={filter} setFilter={setFilter}/>
        <div className="w-3/4 gap-4 flex flex-col">
          {filteredTodos.map((item) => (
            <TodoCard
              item={item}
              handleStatusToggle={handleStatusToggle}
              handleDelete={handleDelete}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
