import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <p>
        {" "}
        or already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
