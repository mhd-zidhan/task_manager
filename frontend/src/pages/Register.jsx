import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";
import "../styles/login.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("auth/register/", {
        username,
        password,
      });

      alert("Registration Successful!");

      navigate("/");
    } catch (error) {
      console.log(error.response);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Registration Failed");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Create Account</h1>

        <p>Register to continue</p>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="input-box">

          <input
            type={showPassword ? "text":"password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <span
            className="eye"
            onClick={()=>setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash/> : <FaEye/>}
          </span>

        </div>

        <button onClick={handleRegister}>
          Register
        </button>

        <div className="bottom-link">
          Already have an account?
          <Link to="/"> Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;