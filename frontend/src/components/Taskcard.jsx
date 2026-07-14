import api from "../services/api";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import "../styles/taskcard.css";

function TaskCard({ task, fetchTasks, setEditingTask }) {
  const handleDelete = async () => {
    try {
      await api.delete(`tasks/${task.id}/`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async () => {
    try {
      await api.put(`tasks/${task.id}/`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setEditingTask(task);
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>

        <span
          className={`status ${
            task.completed ? "completed" : "pending"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="task-description">
        {task.description || "No description provided."}
      </p>

      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={handleComplete}
        >
          <FaCheck style={{ marginRight: "6px" }} />
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>

        <button
          className="edit-btn"
          onClick={handleEdit}
        >
          <FaEdit style={{ marginRight: "6px" }} />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <FaTrash style={{ marginRight: "6px" }} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;