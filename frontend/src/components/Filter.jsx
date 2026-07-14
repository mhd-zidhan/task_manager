import "../styles/filter.css";

function Filter({ setFilter }) {
  return (
    <div className="filter-container">

      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("true")}>
        Completed
      </button>

      <button onClick={() => setFilter("false")}>
        Pending
      </button>

    </div>
  );
}

export default Filter;