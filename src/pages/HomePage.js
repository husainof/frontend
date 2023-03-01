import React from "react";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      HomePage
      <Navigate to="/login" />
    </div>
  );
}
