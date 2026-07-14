import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    alert("Logged out successfully!");

    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Task Manager</h2>
        <p>Manage your daily tasks</p>
      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt style={{ marginRight: "8px" }} />
        Logout
      </button>

    </nav>
  );
}

export default Navbar;