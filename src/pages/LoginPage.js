import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const onSubmit = () => {};

  return (
    <>
      <h1>Login</h1>
      <p>
        or <Link to="/register">register</Link>
      </p>
      <form onSubmit={() => onSubmit()}>
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
      </form>
    </>
  );
}
