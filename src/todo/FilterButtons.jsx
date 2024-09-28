const FilterButtons = ({ setFilter, filter }) => {
  return (
    <div className="flex justify-evenly w-3/4 ">
      <button
        className="border border-gray-700"
        onClick={() => setFilter("All")}
        style={{ opacity: filter === "All" && 0.7 }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Completed")}
        style={{
          opacity: filter === "Completed" && 0.7,
          backgroundColor: "lightgreen",
        }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("Pending")}
        style={{
          opacity: filter === "Pending" && 0.7,
          backgroundColor: "pink",
        }}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterButtons;
