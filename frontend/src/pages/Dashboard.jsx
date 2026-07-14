import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Filter from "../components/Filter";

import api from "../services/api";

import "../styles/dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      let url = "tasks/";

      if (filter !== "all") {
        url += `?completed=${filter}`;
      }

      const response = await api.get(url);

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="section">

          <TaskForm
            fetchTasks={fetchTasks}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />

        </div>

        <Filter setFilter={setFilter} />

        <h2 className="tasks-title">
          My Tasks
        </h2>

        {tasks.length === 0 ? (

          <div className="empty-state">

            <h3>No Tasks Yet 📋</h3>

            <p>Create your first task above.</p>

          </div>

        ) : (

          tasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              fetchTasks={fetchTasks}
              setEditingTask={setEditingTask}
            />

          ))

        )}

      </div>
    </>
  );
}

export default Dashboard;