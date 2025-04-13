import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (email && password.length >= 6) {
      setToken("new_signup_token");
      navigate("/form");
    } else {
      alert("Password should be at least 6 characters.");
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
