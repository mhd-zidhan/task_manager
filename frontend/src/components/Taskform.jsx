import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/taskform.css";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = async () => {

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    try {

      if (editingTask) {

        await api.put(`tasks/${editingTask.id}/`, {
          title,
          description,
          completed: editingTask.completed,
        });

        alert("Task Updated Successfully!");

        setEditingTask(null);

      } else {

        await api.post("tasks/", {
          title,
          description,
        });

        alert("Task Added Successfully!");
      }

      setTitle("");
      setDescription("");

      fetchTasks();

    } catch (error) {
      console.log(error);
      alert("Failed to save task.");
    }
  };

  return (

    <div className="task-form">

      <h2>
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <div className="task-buttons">

        <button
          className="save-btn"
          onClick={handleSubmit}
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (

          <button
            className="cancel-btn"
            onClick={()=>{
              setEditingTask(null);
              setTitle("");
              setDescription("");
            }}
          >
            Cancel
          </button>

        )}

      </div>

    </div>

  );
}

export default TaskForm;